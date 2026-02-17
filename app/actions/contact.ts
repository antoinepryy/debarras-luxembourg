"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export type ContactState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return { success: false, error: "Veuillez vérifier les champs du formulaire." };
  }

  try {
    // Send email via Resend API (configure RESEND_API_KEY in env)
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "contact@debarras-luxembourg.lu";

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Formulaire Contact <onboarding@resend.dev>",
          to: [toEmail],
          subject: `[Débarras Luxembourg] ${parsed.data.subject} - ${parsed.data.name}`,
          html: `
            <h2>Nouveau message depuis le formulaire de contact</h2>
            <p><strong>Nom :</strong> ${parsed.data.name}</p>
            <p><strong>Email :</strong> ${parsed.data.email}</p>
            <p><strong>Téléphone :</strong> ${parsed.data.phone}</p>
            <p><strong>Sujet :</strong> ${parsed.data.subject}</p>
            <p><strong>Message :</strong></p>
            <p>${parsed.data.message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error:", await res.text());
        return { success: false, error: "Erreur lors de l'envoi. Veuillez réessayer." };
      }
    } else {
      // Fallback: log to server console when no email service configured
      console.log("=== Nouveau message de contact ===");
      console.log(JSON.stringify(parsed.data, null, 2));
      console.log("================================");
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Erreur lors de l'envoi. Veuillez réessayer." };
  }
}

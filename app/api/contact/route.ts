import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Veuillez vérifier les champs du formulaire." },
        { status: 400 }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing");
      return NextResponse.json(
        { error: "Configuration email manquante." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          phone: parsed.data.phone,
          subject: parsed.data.subject,
          message: parsed.data.message,
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("EmailJS error:", errorText);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

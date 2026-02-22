import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[CONTACT] Received body:", JSON.stringify(body));

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      console.error("[CONTACT] Validation failed:", parsed.error.flatten());
      return NextResponse.json(
        { error: "Veuillez vérifier les champs du formulaire." },
        { status: 400 }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    console.log("[CONTACT] ENV check - serviceId:", serviceId ? "SET" : "MISSING");
    console.log("[CONTACT] ENV check - templateId:", templateId ? "SET" : "MISSING");
    console.log("[CONTACT] ENV check - publicKey:", publicKey ? `SET (${publicKey.substring(0, 4)}...)` : "MISSING");

    if (!serviceId || !templateId || !publicKey) {
      console.error("[CONTACT] EmailJS credentials missing");
      return NextResponse.json(
        { error: "Configuration email manquante." },
        { status: 500 }
      );
    }

    const emailPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: parsed.data.name,
        from_email: parsed.data.email,
        phone: parsed.data.phone || "",
        subject: "Demande de contact",
        message: parsed.data.message,
      },
    };

    console.log("[CONTACT] Sending to EmailJS:", JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: emailPayload.template_params,
    }));

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailPayload),
    });

    const responseText = await res.text();
    console.log("[CONTACT] EmailJS response status:", res.status);
    console.log("[CONTACT] EmailJS response body:", responseText);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Erreur EmailJS: ${responseText}` },
        { status: 500 }
      );
    }

    console.log("[CONTACT] Email sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT] Unexpected error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

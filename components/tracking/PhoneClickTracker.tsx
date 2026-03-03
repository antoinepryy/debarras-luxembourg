"use client";

import { useEffect } from "react";
import emailjs from "emailjs-com";
import { trackConversion, CONVERSION_IDS } from "@/lib/gtag";

export function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (target?.href?.startsWith("tel:")) {
        trackConversion(CONVERSION_IDS.appel);

        const phoneNumber = target.href.replace("tel:", "");
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

        if (serviceId && templateId && publicKey) {
          emailjs.send(serviceId, templateId, {
            name: "Clic téléphone",
            email: "N/A",
            phone: phoneNumber,
            message: `Quelqu'un a cliqué sur le numéro de téléphone depuis la page : ${window.location.href} (${new Date().toLocaleString("fr-LU")})`,
          }, publicKey).catch(() => {
            // Silently fail - don't block the phone call
          });
        }
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

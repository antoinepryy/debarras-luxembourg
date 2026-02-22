"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui";
import { trackConversion, CONVERSION_IDS } from "@/lib/gtag";

const inputVariants = {
  focus: { scale: 1.01, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } },
};

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    switch (name) {
      case "name":
        if (value.length > 0 && value.length < 2) newErrors.name = "Le nom doit contenir au moins 2 caractères";
        else delete newErrors.name;
        break;
      case "email":
        if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Adresse email invalide";
        else delete newErrors.email;
        break;
    }
    setErrors(newErrors);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);
      trackConversion(CONVERSION_IDS.formulaire);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsPending(false);
    }
  }

  const inputBaseClasses = "w-full px-4 py-3.5 border-2 rounded-xl focus:ring-0 outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white";
  const inputFocusClasses = "focus:border-[var(--color-primary)] focus:bg-white focus:shadow-lg focus:shadow-[var(--color-primary)]/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Message envoyé avec succès !</p>
              <p className="text-sm text-green-600">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <motion.div
          variants={inputVariants}
          animate={focusedField === "name" ? "focus" : "blur"}
        >
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Nom complet <span className="text-[var(--color-primary)]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              onFocus={() => setFocusedField("name")}
              onBlur={(e) => { setFocusedField(null); validateField("name", e.target.value); }}
              className={`${inputBaseClasses} ${inputFocusClasses} pl-11 ${errors.name ? "border-red-400 bg-red-50/50" : "border-gray-200"}`}
              placeholder="Votre nom"
            />
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "name" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
            </div>
          </div>
          {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
        </motion.div>

        {/* Email */}
        <motion.div
          variants={inputVariants}
          animate={focusedField === "email" ? "focus" : "blur"}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Email <span className="text-[var(--color-primary)]">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              onFocus={() => setFocusedField("email")}
              onBlur={(e) => { setFocusedField(null); validateField("email", e.target.value); }}
              className={`${inputBaseClasses} ${inputFocusClasses} pl-11 ${errors.email ? "border-red-400 bg-red-50/50" : "border-gray-200"}`}
              placeholder="votre@email.com"
            />
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "email" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
            </div>
          </div>
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
        </motion.div>
      </div>

      {/* Téléphone - pleine largeur */}
      <motion.div
        variants={inputVariants}
        animate={focusedField === "phone" ? "focus" : "blur"}
      >
        <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
          Téléphone
        </label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClasses} ${inputFocusClasses} pl-11 border-gray-200`}
            placeholder="+352 ..."
          />
          <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "phone" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Message */}
      <motion.div
        variants={inputVariants}
        animate={focusedField === "message" ? "focus" : "blur"}
      >
        <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
          Message <span className="text-[var(--color-primary)]">*</span>
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClasses} ${inputFocusClasses} pl-11 resize-none border-gray-200`}
            placeholder="Décrivez votre demande..."
          />
          <div className={`absolute left-3 top-4 transition-colors duration-300 ${focusedField === "message" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Submit */}
      <div className="relative inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl blur opacity-30" />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isPending}
          className="relative w-full md:w-auto px-8"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Envoi en cours...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Envoyer le message
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}

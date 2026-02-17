"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputVariants = {
  focus: { scale: 1.01, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } },
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission (frontend only)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form data:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputBaseClasses = "w-full px-4 py-3.5 border-2 rounded-xl focus:ring-0 outline-none transition-all duration-300 bg-gray-50/50 hover:bg-white";
  const inputFocusClasses = "focus:border-[var(--color-primary)] focus:bg-white focus:shadow-lg focus:shadow-[var(--color-primary)]/10";

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-4"
          >
            <motion.div
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <div>
              <p className="font-semibold">Message envoyé avec succès !</p>
              <p className="text-sm text-green-600">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
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
              {...register("name")}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClasses} ${inputFocusClasses} pl-11 ${
                errors.name ? "border-red-400 bg-red-50/50" : "border-gray-200"
              }`}
              placeholder="Votre nom"
            />
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "name" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
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
              {...register("email")}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClasses} ${inputFocusClasses} pl-11 ${
                errors.email ? "border-red-400 bg-red-50/50" : "border-gray-200"
              }`}
              placeholder="votre@email.com"
            />
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "email" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Téléphone */}
        <motion.div
          variants={inputVariants}
          animate={focusedField === "phone" ? "focus" : "blur"}
        >
          <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Téléphone <span className="text-[var(--color-primary)]">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClasses} ${inputFocusClasses} pl-11 ${
                errors.phone ? "border-red-400 bg-red-50/50" : "border-gray-200"
              }`}
              placeholder="+352 ..."
            />
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "phone" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {errors.phone.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Sujet */}
        <motion.div
          variants={inputVariants}
          animate={focusedField === "subject" ? "focus" : "blur"}
        >
          <label htmlFor="subject" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
            Sujet <span className="text-[var(--color-primary)]">*</span>
          </label>
          <div className="relative">
            <select
              id="subject"
              {...register("subject")}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClasses} ${inputFocusClasses} pl-11 appearance-none cursor-pointer ${
                errors.subject ? "border-red-400 bg-red-50/50" : "border-gray-200"
              }`}
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="debarras">Demande de débarras</option>
              <option value="devis">Demande de devis</option>
              <option value="autre">Autre demande</option>
            </select>
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === "subject" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {errors.subject.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

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
            rows={5}
            {...register("message")}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClasses} ${inputFocusClasses} pl-11 resize-none ${
              errors.message ? "border-red-400 bg-red-50/50" : "border-gray-200"
            }`}
            placeholder="Décrivez votre demande..."
          />
          <div className={`absolute left-3 top-4 transition-colors duration-300 ${focusedField === "message" ? "text-[var(--color-primary)]" : "text-gray-400"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-red-500 flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submit */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative inline-block"
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl blur opacity-30"
          animate={{ opacity: isSubmitting ? 0.5 : 0.3 }}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="relative w-full md:w-auto px-8"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.span
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
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
      </motion.div>
    </motion.form>
  );
}

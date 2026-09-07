"use client";

import { useState } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content";
import { cn } from "@/lib/cn";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Indiquez votre nom.";
  if (!values.email.trim()) errors.email = "Indiquez votre email.";
  else if (!emailRe.test(values.email.trim()))
    errors.email = "Cet email ne semble pas valide.";
  if (values.message.trim().length < 10)
    errors.message = "Décrivez votre besoin en quelques mots (10 caractères min).";
  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40";

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (touched) setErrors(validate(next));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = encodeURIComponent(
      `Demande de contact — ${values.name}`,
    );
    const body = encodeURIComponent(
      `Nom : ${values.name}\nEmail : ${values.email}\n\n${values.message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(fieldBase, errors.name ? "border-red-400" : "border-line")}
          placeholder="Votre nom"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(fieldBase, errors.email ? "border-red-400" : "border-line")}
          placeholder="vous@exemple.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            fieldBase,
            "resize-y",
            errors.message ? "border-red-400" : "border-line",
          )}
          placeholder="Décrivez votre projet ou votre besoin…"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Envoyer le message
        <PaperPlaneRight size={18} weight="bold" />
      </Button>

      <p className="text-xs text-ink-muted">
        L&apos;envoi ouvre votre application de messagerie vers {company.email}.
      </p>
    </form>
  );
}

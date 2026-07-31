"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { adminLoginContent } from "@/content/admin";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/12 bg-brand-navy/70 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-[border-color,box-shadow] duration-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

const labelClassName =
  "font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/admin/reviews";
  const configError = searchParams.get("error") === "config";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    configError ? adminLoginContent.configError : null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(payload.error ?? adminLoginContent.invalidCredentials);
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch {
      setError(adminLoginContent.invalidCredentials);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-white/10 bg-brand-navy-deep/60 p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="admin-email" className={labelClassName}>
            {adminLoginContent.emailLabel}
          </label>
          <input
            id="admin-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${fieldClassName} min-h-[48px]`}
          />
        </div>

        <div>
          <label htmlFor="admin-password" className={labelClassName}>
            {adminLoginContent.passwordLabel}
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={`${fieldClassName} min-h-[48px]`}
          />
        </div>

        {error ? (
          <p role="alert" className="font-sans text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand-primary px-7 py-3 font-sans text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Signing in…" : adminLoginContent.submitLabel}
        </button>
      </form>
    </div>
  );
}

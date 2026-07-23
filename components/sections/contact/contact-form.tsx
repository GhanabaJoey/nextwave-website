"use client";

import { useId, useState, type FormEvent } from "react";
import { contactFormContent } from "@/content/contact";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/12 bg-brand-navy/70 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-[border-color,box-shadow] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

const fieldErrorClassName =
  "border-red-400/60 focus:border-red-400 focus:ring-red-400/20";

const labelClassName =
  "font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white";

type FormErrors = {
  name?: string;
  email?: string;
  enquiryType?: string;
  message?: string;
};

function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};
  const { validation } = contactFormContent;

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const enquiryType = formData.get("enquiryType") as string;
  const message = (formData.get("message") as string)?.trim();

  if (!name) errors.name = validation.nameRequired;
  if (!email) {
    errors.email = validation.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = validation.emailInvalid;
  }
  if (!enquiryType) errors.enquiryType = validation.enquiryTypeRequired;
  if (!message) errors.message = validation.messageRequired;

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const noticeId = `${formId}-submission-notice`;
  const feedbackId = `${formId}-feedback`;

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "info" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    const formData = new FormData(event.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFeedback({
        type: "error",
        message: "Please complete all required fields before sending.",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 400));

    setIsSubmitting(false);
    setFeedback({
      type: "info",
      message: contactFormContent.deliveryNotConnectedMessage,
    });
  };

  const { fields, enquiryTypes, submitLabel, privacyNote, submissionNotice } =
    contactFormContent;

  return (
    <div className="rounded-xl border border-white/10 bg-brand-navy-deep/60 p-6 sm:p-8">
      <p
        id={noticeId}
        className="font-sans text-sm leading-relaxed text-text-muted"
      >
        {submissionNotice}
      </p>

      <form
        id={formId}
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 space-y-5"
        aria-describedby={`${noticeId}${feedback ? ` ${feedbackId}` : ""}`}
      >
        <div>
          <label htmlFor={`${formId}-name`} className={labelClassName}>
            {fields.name.label}{" "}
            <span className="text-brand-primary-light">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={fields.name.placeholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={`${fieldClassName} min-h-[48px] ${errors.name ? fieldErrorClassName : ""}`}
          />
          {errors.name ? (
            <p
              id={`${formId}-name-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className={labelClassName}>
            {fields.email.label}{" "}
            <span className="text-brand-primary-light">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={fields.email.placeholder}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={`${fieldClassName} min-h-[48px] ${errors.email ? fieldErrorClassName : ""}`}
          />
          {errors.email ? (
            <p
              id={`${formId}-email-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-type`} className={labelClassName}>
            {fields.enquiryType.label}{" "}
            <span className="text-brand-primary-light">*</span>
          </label>
          <select
            id={`${formId}-type`}
            name="enquiryType"
            required
            defaultValue=""
            aria-invalid={errors.enquiryType ? true : undefined}
            aria-describedby={
              errors.enquiryType ? `${formId}-type-error` : undefined
            }
            className={`${fieldClassName} min-h-[48px] cursor-pointer ${errors.enquiryType ? fieldErrorClassName : ""}`}
          >
            <option value="" disabled>
              {fields.enquiryType.placeholder}
            </option>
            {enquiryTypes.map((type) => (
              <option
                key={type.value}
                value={type.value}
                className="bg-brand-navy"
              >
                {type.label}
              </option>
            ))}
          </select>
          {errors.enquiryType ? (
            <p
              id={`${formId}-type-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.enquiryType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className={labelClassName}>
            {fields.message.label}{" "}
            <span className="text-brand-primary-light">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={5}
            placeholder={fields.message.placeholder}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
            className={`${fieldClassName} min-h-[140px] max-h-[180px] resize-y ${errors.message ? fieldErrorClassName : ""}`}
          />
          {errors.message ? (
            <p
              id={`${formId}-message-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        {feedback ? (
          <div
            id={feedbackId}
            role="alert"
            aria-live="polite"
            className={`rounded-lg border px-4 py-3 font-sans text-sm leading-relaxed ${
              feedback.type === "error"
                ? "border-red-400/40 bg-red-400/10 text-red-200"
                : "border-brand-primary/30 bg-brand-primary/5 text-text-muted"
            }`}
          >
            {feedback.message}
          </div>
        ) : null}

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-lg bg-brand-primary px-7 py-3 font-sans text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? "Sending…" : submitLabel}
            {!isSubmitting ? (
              <span aria-hidden="true">→</span>
            ) : null}
          </button>
          <p className="mt-4 font-sans text-sm leading-relaxed text-text-muted/80">
            {privacyNote}
          </p>
        </div>
      </form>
    </div>
  );
}

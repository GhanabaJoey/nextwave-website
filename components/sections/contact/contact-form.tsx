"use client";

import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  contactFormContent,
  emptyContactValues,
  type ContactFormValues,
} from "@/content/contact";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/12 bg-brand-navy/70 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-[border-color,box-shadow] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

const fieldErrorClassName =
  "border-red-400/60 focus:border-red-400 focus:ring-red-400/20";

const labelClassName =
  "font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white";

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};
  const { validation } = contactFormContent;

  if (!values.name.trim()) errors.name = validation.nameRequired;
  if (!values.email.trim()) {
    errors.email = validation.emailRequired;
  } else if (!isValidEmail(values.email)) {
    errors.email = validation.emailInvalid;
  }
  if (!values.enquiryType) errors.enquiryType = validation.enquiryTypeRequired;
  if (!values.message.trim()) errors.message = validation.messageRequired;

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const noticeId = `${formId}-submission-notice`;
  const feedbackId = `${formId}-feedback`;
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<ContactFormValues>(emptyContactValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    message: string;
    secondaryMessage?: string;
  } | null>(null);

  const {
    fields,
    enquiryTypes,
    submitLabel,
    privacyNote,
    submissionNotice,
    successMessage,
    successSecondaryMessage,
    submitErrorMessage,
    validation,
  } = contactFormContent;

  const update =
    (field: keyof ContactFormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const next = event.target.value;
      setValues((prev) => ({ ...prev, [field]: next }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const nextErrors = { ...prev };
        delete nextErrors[field];
        return nextErrors;
      });
      setFeedback(null);
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || submittedSuccessfully) return;

    setFeedback(null);

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFeedback({ type: "error", message: validation.formSummary });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          enquiryType: values.enquiryType,
          message: values.message,
          website: (
            event.currentTarget.elements.namedItem("website") as
              | HTMLInputElement
              | null
          )?.value,
        }),
      });

      const payload = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: payload.error ?? submitErrorMessage,
        });
        return;
      }

      setValues(emptyContactValues);
      setErrors({});
      setSubmittedSuccessfully(true);
      setFeedback({
        type: "success",
        message: payload.message ?? successMessage,
        secondaryMessage: successSecondaryMessage,
      });
    } catch {
      setFeedback({ type: "error", message: submitErrorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForAnotherMessage = () => {
    setSubmittedSuccessfully(false);
    setFeedback(null);
    setValues(emptyContactValues);
    setErrors({});
    if (honeypotRef.current) {
      honeypotRef.current.value = "";
    }
  };

  const fieldBorder = (hasError: boolean) =>
    hasError ? fieldErrorClassName : "";

  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-brand-navy-deep/60 p-6 sm:p-8">
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden"
        >
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            ref={honeypotRef}
            id={`${formId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

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
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.name))}`}
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
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.email))}`}
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
            value={values.enquiryType}
            onChange={update("enquiryType")}
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={
              errors.enquiryType ? `${formId}-type-error` : undefined
            }
            className={`${fieldClassName} min-h-[48px] cursor-pointer ${fieldBorder(Boolean(errors.enquiryType))}`}
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
            value={values.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? `${formId}-message-error` : undefined
            }
            className={`${fieldClassName} min-h-[140px] max-h-[180px] resize-y ${fieldBorder(Boolean(errors.message))}`}
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
            role={feedback.type === "success" ? "status" : "alert"}
            aria-live="polite"
            className={`rounded-lg border px-4 py-3 font-sans text-sm leading-relaxed ${
              feedback.type === "error"
                ? "border-red-400/40 bg-red-400/10 text-red-200"
                : "border-brand-primary/30 bg-brand-primary/5 text-text-muted"
            }`}
          >
            <p>{feedback.message}</p>
            {feedback.secondaryMessage ? (
              <p className="mt-2 text-text-muted/90">{feedback.secondaryMessage}</p>
            ) : null}
          </div>
        ) : null}

        <div className="pt-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting || submittedSuccessfully}
              aria-busy={isSubmitting}
              aria-disabled={submittedSuccessfully || undefined}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-lg bg-brand-primary px-7 py-3 font-sans text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting
                ? "Sending…"
                : submittedSuccessfully
                  ? "Message Sent"
                  : submitLabel}
              {!isSubmitting && !submittedSuccessfully ? (
                <span aria-hidden="true">→</span>
              ) : null}
            </button>
            {submittedSuccessfully ? (
              <button
                type="button"
                onClick={resetForAnotherMessage}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-white/25 bg-transparent px-7 py-3 font-sans text-sm font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:w-auto"
              >
                Send Another Message
              </button>
            ) : null}
          </div>
          <p className="mt-4 font-sans text-sm leading-relaxed text-text-muted/80">
            {privacyNote}
          </p>
        </div>
      </form>
    </div>
  );
}

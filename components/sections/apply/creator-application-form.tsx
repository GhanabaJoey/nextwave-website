"use client";

import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  applyFormContent,
  emptyApplicationValues,
  type ApplicationFormValues,
} from "@/content/apply";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/12 bg-brand-navy/70 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-[border-color,box-shadow] outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

const fieldErrorClassName =
  "border-red-400/60 focus:border-red-400 focus:ring-red-400/20";

const labelClassName =
  "font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white";

const sectionHeadingClassName =
  "font-display text-xl font-bold uppercase tracking-[0.04em] text-white sm:text-2xl";

const errorClassName = "mt-1.5 font-sans text-sm text-red-300";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validate(
  values: ApplicationFormValues,
): Partial<Record<keyof ApplicationFormValues, string>> {
  const errors: Partial<Record<keyof ApplicationFormValues, string>> = {};
  const { validation } = applyFormContent;

  if (!values.fullName.trim()) errors.fullName = validation.fullName;
  if (!values.email.trim()) {
    errors.email = validation.emailRequired;
  } else if (!isValidEmail(values.email)) {
    errors.email = validation.emailInvalid;
  }
  if (!values.country) errors.country = validation.country;
  if (!values.tiktokUsername.trim()) {
    errors.tiktokUsername = validation.tiktokUsername;
  }
  if (values.tiktokProfileUrl.trim() && !isValidUrl(values.tiktokProfileUrl)) {
    errors.tiktokProfileUrl = validation.tiktokProfileUrl;
  }
  if (!values.liveStatus) errors.liveStatus = validation.liveStatus;
  if (!values.whyNextwave.trim()) {
    errors.whyNextwave = validation.whyNextwave;
  }

  return errors;
}

export function CreatorApplicationForm() {
  const formId = useId();
  const noticeId = `${formId}-backend-notice`;
  const feedbackId = `${formId}-feedback`;
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<ApplicationFormValues>(
    emptyApplicationValues,
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof ApplicationFormValues, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    message: string;
    secondaryMessage?: string;
  } | null>(null);

  const {
    submissionNotice,
    successMessage,
    successSecondaryMessage,
    submitErrorMessage,
    privacyNote,
    submitLabel,
    sections,
    fields,
    countries,
    followerRanges,
    liveStatusOptions,
    liveFrequency,
    developmentGoals,
    validation,
  } = applyFormContent;

  const update =
    (field: keyof ApplicationFormValues) =>
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

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFeedback({ type: "error", message: validation.formSummary });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          country: values.country,
          tiktokUsername: values.tiktokUsername,
          tiktokProfileUrl: values.tiktokProfileUrl,
          followerRange: values.followerRange,
          liveStatus: values.liveStatus,
          liveFrequency: values.liveFrequency,
          developmentGoal: values.developmentGoal,
          whyNextwave: values.whyNextwave,
          additionalInfo: values.additionalInfo,
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

      setValues(emptyApplicationValues);
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

  const resetForAnotherSubmission = () => {
    setSubmittedSuccessfully(false);
    setFeedback(null);
    setValues(emptyApplicationValues);
    setErrors({});
    if (honeypotRef.current) {
      honeypotRef.current.value = "";
    }
  };

  const fieldBorder = (hasError: boolean) =>
    hasError ? fieldErrorClassName : "";

  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-brand-navy-deep/60 p-6 sm:p-8">
      <p id={noticeId} className="font-sans text-sm leading-relaxed text-text-muted">
        {submissionNotice}
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 space-y-12"
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

        <fieldset className="space-y-5">
          <legend className={`${sectionHeadingClassName} mb-1`}>
            {sections.aboutYou}
          </legend>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label htmlFor={`${formId}-fullName`} className={labelClassName}>
                {fields.fullName.label}{" "}
                <span className="text-brand-primary-light">*</span>
              </label>
              <input
                id={`${formId}-fullName`}
                name="fullName"
                type="text"
                required
                autoComplete="name"
                value={values.fullName}
                onChange={update("fullName")}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? `${formId}-fullName-error` : undefined
                }
                className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.fullName))}`}
              />
              {errors.fullName ? (
                <p
                  id={`${formId}-fullName-error`}
                  role="alert"
                  className={errorClassName}
                >
                  {errors.fullName}
                </p>
              ) : null}
            </div>

            <div className="min-w-0">
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
                value={values.email}
                onChange={update("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? `${formId}-email-error` : undefined
                }
                className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.email))}`}
              />
              {errors.email ? (
                <p
                  id={`${formId}-email-error`}
                  role="alert"
                  className={errorClassName}
                >
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="sm:max-w-xs">
            <label htmlFor={`${formId}-country`} className={labelClassName}>
              {fields.country.label}{" "}
              <span className="text-brand-primary-light">*</span>
            </label>
            <select
              id={`${formId}-country`}
              name="country"
              required
              value={values.country}
              onChange={update("country")}
              aria-invalid={Boolean(errors.country)}
              aria-describedby={
                errors.country ? `${formId}-country-error` : undefined
              }
              className={`${fieldClassName} min-h-[48px] cursor-pointer ${fieldBorder(Boolean(errors.country))}`}
            >
              <option value="" disabled>
                {fields.country.placeholder}
              </option>
              {countries.map((country) => (
                <option
                  key={country.value}
                  value={country.value}
                  className="bg-brand-navy"
                >
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country ? (
              <p
                id={`${formId}-country-error`}
                role="alert"
                className={errorClassName}
              >
                {errors.country}
              </p>
            ) : null}
          </div>
        </fieldset>

        <fieldset className="space-y-5 border-t border-white/10 pt-10">
          <legend className={`${sectionHeadingClassName} mb-1`}>
            {sections.creatorProfile}
          </legend>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label
                htmlFor={`${formId}-tiktokUsername`}
                className={labelClassName}
              >
                {fields.tiktokUsername.label}{" "}
                <span className="text-brand-primary-light">*</span>
              </label>
              <input
                id={`${formId}-tiktokUsername`}
                name="tiktokUsername"
                type="text"
                required
                autoComplete="username"
                placeholder={fields.tiktokUsername.placeholder}
                value={values.tiktokUsername}
                onChange={update("tiktokUsername")}
                aria-invalid={Boolean(errors.tiktokUsername)}
                aria-describedby={
                  errors.tiktokUsername
                    ? `${formId}-tiktokUsername-error`
                    : undefined
                }
                className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.tiktokUsername))}`}
              />
              {errors.tiktokUsername ? (
                <p
                  id={`${formId}-tiktokUsername-error`}
                  role="alert"
                  className={errorClassName}
                >
                  {errors.tiktokUsername}
                </p>
              ) : null}
            </div>

            <div className="min-w-0">
              <label
                htmlFor={`${formId}-followerRange`}
                className={labelClassName}
              >
                {fields.followerRange.label}
              </label>
              <select
                id={`${formId}-followerRange`}
                name="followerRange"
                value={values.followerRange}
                onChange={update("followerRange")}
                className={`${fieldClassName} min-h-[48px] cursor-pointer`}
              >
                <option value="">{fields.followerRange.placeholder}</option>
                {followerRanges.map((range) => (
                  <option
                    key={range.value}
                    value={range.value}
                    className="bg-brand-navy"
                  >
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-tiktokUrl`} className={labelClassName}>
              {fields.tiktokProfileUrl.label}
            </label>
            <input
              id={`${formId}-tiktokUrl`}
              name="tiktokProfileUrl"
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder="https://"
              value={values.tiktokProfileUrl}
              onChange={update("tiktokProfileUrl")}
              aria-invalid={Boolean(errors.tiktokProfileUrl)}
              aria-describedby={
                errors.tiktokProfileUrl
                  ? `${formId}-tiktokUrl-error`
                  : undefined
              }
              className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.tiktokProfileUrl))}`}
            />
            {errors.tiktokProfileUrl ? (
              <p
                id={`${formId}-tiktokUrl-error`}
                role="alert"
                className={errorClassName}
              >
                {errors.tiktokProfileUrl}
              </p>
            ) : null}
          </div>
        </fieldset>

        <fieldset className="space-y-5 border-t border-white/10 pt-10">
          <legend className={`${sectionHeadingClassName} mb-1`}>
            {sections.liveExperience}
          </legend>

          <div>
            <span className={labelClassName} id={`${formId}-liveStatus-label`}>
              {fields.liveStatus.label}{" "}
              <span className="text-brand-primary-light">*</span>
            </span>
            <div
              className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6"
              role="radiogroup"
              aria-labelledby={`${formId}-liveStatus-label`}
              aria-invalid={Boolean(errors.liveStatus)}
              aria-describedby={
                errors.liveStatus ? `${formId}-liveStatus-error` : undefined
              }
            >
              {liveStatusOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex min-h-[44px] cursor-pointer items-center gap-2.5 font-sans text-base text-text-muted"
                >
                  <input
                    type="radio"
                    name="liveStatus"
                    value={option.value}
                    checked={values.liveStatus === option.value}
                    onChange={update("liveStatus")}
                    className="size-4 shrink-0 border-white/20 bg-brand-navy/80 text-brand-primary focus:ring-2 focus:ring-brand-primary/25"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.liveStatus ? (
              <p
                id={`${formId}-liveStatus-error`}
                role="alert"
                className={errorClassName}
              >
                {errors.liveStatus}
              </p>
            ) : null}
          </div>

          <div className="sm:max-w-md">
            <label htmlFor={`${formId}-liveFrequency`} className={labelClassName}>
              {fields.liveFrequency.label}
            </label>
            <select
              id={`${formId}-liveFrequency`}
              name="liveFrequency"
              value={values.liveFrequency}
              onChange={update("liveFrequency")}
              className={`${fieldClassName} min-h-[48px] cursor-pointer`}
            >
              <option value="">{fields.liveFrequency.placeholder}</option>
              {liveFrequency.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-brand-navy"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset className="space-y-5 border-t border-white/10 pt-10">
          <legend className={`${sectionHeadingClassName} mb-1`}>
            {sections.yourGoals}
          </legend>

          <div className="sm:max-w-md">
            <label htmlFor={`${formId}-developmentGoal`} className={labelClassName}>
              {fields.developmentGoal.label}
            </label>
            <select
              id={`${formId}-developmentGoal`}
              name="developmentGoal"
              value={values.developmentGoal}
              onChange={update("developmentGoal")}
              className={`${fieldClassName} min-h-[48px] cursor-pointer`}
            >
              <option value="">{fields.developmentGoal.placeholder}</option>
              {developmentGoals.map((goal) => (
                <option
                  key={goal.value}
                  value={goal.value}
                  className="bg-brand-navy"
                >
                  {goal.label}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset className="space-y-5 border-t border-white/10 pt-10">
          <legend className={`${sectionHeadingClassName} mb-1`}>
            {sections.motivation}
          </legend>

          <div>
            <label htmlFor={`${formId}-whyNextwave`} className={labelClassName}>
              {fields.whyNextwave.label}{" "}
              <span className="text-brand-primary-light">*</span>
            </label>
            <p className="mt-1.5 font-sans text-sm leading-relaxed text-text-muted">
              {fields.whyNextwave.helper}
            </p>
            <textarea
              id={`${formId}-whyNextwave`}
              name="whyNextwave"
              required
              rows={5}
              value={values.whyNextwave}
              onChange={update("whyNextwave")}
              aria-invalid={Boolean(errors.whyNextwave)}
              aria-describedby={
                errors.whyNextwave ? `${formId}-whyNextwave-error` : undefined
              }
              className={`${fieldClassName} min-h-[140px] max-h-[180px] resize-y ${fieldBorder(Boolean(errors.whyNextwave))}`}
            />
            {errors.whyNextwave ? (
              <p
                id={`${formId}-whyNextwave-error`}
                role="alert"
                className={errorClassName}
              >
                {errors.whyNextwave}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor={`${formId}-additionalInfo`} className={labelClassName}>
              {fields.additionalInfo.label}{" "}
              <span className="font-normal normal-case tracking-normal text-text-muted">
                ({fields.additionalInfo.optional})
              </span>
            </label>
            <textarea
              id={`${formId}-additionalInfo`}
              name="additionalInfo"
              rows={4}
              value={values.additionalInfo}
              onChange={update("additionalInfo")}
              className={`${fieldClassName} min-h-[120px] max-h-[160px] resize-y`}
            />
          </div>
        </fieldset>

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

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting || submittedSuccessfully}
              aria-busy={isSubmitting}
              aria-disabled={submittedSuccessfully || undefined}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-lg bg-brand-primary px-7 py-3 font-sans text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting
                ? "Submitting…"
                : submittedSuccessfully
                  ? "Application Submitted"
                  : submitLabel}
              {!isSubmitting && !submittedSuccessfully ? (
                <span aria-hidden="true">→</span>
              ) : null}
            </button>
            {submittedSuccessfully ? (
              <button
                type="button"
                onClick={resetForAnotherSubmission}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-white/25 bg-transparent px-7 py-3 font-sans text-sm font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:w-auto"
              >
                Submit Another Application
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

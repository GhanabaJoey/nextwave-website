"use client";

import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  emptyReviewValues,
  reviewFormContent,
  type ReviewFormValues,
} from "@/content/creator-voices";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/12 bg-brand-navy/70 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-[border-color,box-shadow] duration-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

const fieldErrorClassName =
  "border-red-400/60 focus:border-red-400 focus:ring-red-400/20";

const labelClassName =
  "font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white";

const MAX_PROFILE_PHOTO_BYTES = 2 * 1024 * 1024;
const ACCEPTED_PROFILE_PHOTO_TYPES = ["image/jpeg", "image/png"] as const;

type FormErrors = Partial<
  Record<keyof ReviewFormValues | "profilePhoto", string>
>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function StarRatingInput({
  value,
  onChange,
  error,
  fieldId,
  label,
}: {
  value: number;
  onChange: (rating: number) => void;
  error?: string;
  fieldId: string;
  label: string;
}) {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    star: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onChange(star);
    }
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      onChange(Math.min(5, (value || star) + 1));
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      onChange(Math.max(1, (value || star) - 1));
    }
  };

  const activeRating = hoveredRating || value;

  return (
    <div>
      <p id={`${fieldId}-label`} className={labelClassName}>
        {label} <span className="text-brand-primary-light">*</span>
      </p>
      <div
        role="radiogroup"
        aria-labelledby={`${fieldId}-label`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="mt-3 flex gap-1"
        onMouseLeave={() => setHoveredRating(0)}
      >
        {Array.from({ length: 5 }, (_, index) => {
          const star = index + 1;
          const isFilled = star <= activeRating;

          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={value === star}
              aria-label={`${star} star${star === 1 ? "" : "s"}`}
              onClick={() => onChange(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onKeyDown={(event) => handleKeyDown(event, star)}
              className="rounded-md p-1 transition-transform duration-150 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className={`h-8 w-8 transition-colors duration-150 sm:h-9 sm:w-9 ${
                  isFilled ? "fill-brand-accent" : "fill-white/15"
                }`}
              >
                <path d="M12 2.5l2.96 6 6.54.95-4.75 4.63 1.12 6.52L12 17.77l-5.87 3.08 1.12-6.52-4.75-4.63 6.54-.95L12 2.5z" />
              </svg>
            </button>
          );
        })}
      </div>
      {error ? (
        <p
          id={`${fieldId}-error`}
          role="alert"
          className="mt-1.5 font-sans text-sm text-red-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function CreatorReviewForm() {
  const formId = useId();
  const noticeId = `${formId}-moderation-notice`;
  const feedbackId = `${formId}-feedback`;
  const honeypotRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [values, setValues] = useState<ReviewFormValues>(emptyReviewValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const {
    fields,
    countries,
    submitLabel,
    moderationNotice,
    successMessage,
    submitErrorMessage,
    validation,
  } = reviewFormContent;

  const update =
    (field: keyof ReviewFormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const target = event.target;
      const next =
        target instanceof HTMLInputElement && target.type === "checkbox"
          ? target.checked
          : target.value;

      setValues((prev) => ({ ...prev, [field]: next }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const nextErrors = { ...prev };
        delete nextErrors[field];
        return nextErrors;
      });
      setFeedback(null);
    };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = validation.fullNameRequired;
    }
    if (!values.tiktokUsername.trim()) {
      nextErrors.tiktokUsername = validation.tiktokUsernameRequired;
    }
    if (!values.country) {
      nextErrors.country = validation.countryRequired;
    }
    if (!values.email.trim()) {
      nextErrors.email = validation.emailRequired;
    } else if (!isValidEmail(values.email)) {
      nextErrors.email = validation.emailInvalid;
    }
    if (!values.rating) {
      nextErrors.rating = validation.ratingRequired;
    }
    if (!values.review.trim()) {
      nextErrors.review = validation.reviewRequired;
    }
    if (!values.genuineConfirmation) {
      nextErrors.genuineConfirmation = validation.genuineRequired;
    }

    return nextErrors;
  };

  const handleProfilePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFeedback(null);

    if (!file) {
      setProfilePhoto(null);
      setProfilePhotoPreview(null);
      setErrors((prev) => {
        if (!prev.profilePhoto) return prev;
        const nextErrors = { ...prev };
        delete nextErrors.profilePhoto;
        return nextErrors;
      });
      return;
    }

    if (
      !ACCEPTED_PROFILE_PHOTO_TYPES.includes(
        file.type as (typeof ACCEPTED_PROFILE_PHOTO_TYPES)[number],
      ) ||
      file.size > MAX_PROFILE_PHOTO_BYTES
    ) {
      setProfilePhoto(null);
      setProfilePhotoPreview(null);
      setErrors((prev) => ({
        ...prev,
        profilePhoto: validation.profilePhotoInvalid,
      }));
      return;
    }

    setProfilePhoto(file);
    setProfilePhotoPreview(URL.createObjectURL(file));
    setErrors((prev) => {
      if (!prev.profilePhoto) return prev;
      const nextErrors = { ...prev };
      delete nextErrors.profilePhoto;
      return nextErrors;
    });
  };

  const readProfilePhotoAsDataUrl = async (): Promise<string | undefined> => {
    if (!profilePhoto) return undefined;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(typeof reader.result === "string" ? reader.result : undefined);
      };
      reader.onerror = () => reject(new Error("Failed to read profile photo."));
      reader.readAsDataURL(profilePhoto);
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || submittedSuccessfully) return;

    setFeedback(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFeedback({ type: "error", message: validation.formSummary });
      return;
    }

    setIsSubmitting(true);

    try {
      let profilePhotoData: string | undefined;
      if (profilePhoto) {
        profilePhotoData = await readProfilePhotoAsDataUrl();
      }

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName,
          tiktokUsername: values.tiktokUsername,
          country: values.country,
          email: values.email,
          rating: values.rating,
          review: values.review,
          genuineConfirmation: values.genuineConfirmation,
          profilePhoto: profilePhotoData,
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

      setValues(emptyReviewValues);
      setErrors({});
      setProfilePhoto(null);
      setProfilePhotoPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSubmittedSuccessfully(true);
      setFeedback({
        type: "success",
        message: payload.message ?? successMessage,
      });
    } catch {
      setFeedback({ type: "error", message: submitErrorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldBorder = (hasError: boolean) =>
    hasError ? fieldErrorClassName : "";

  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-brand-navy-deep/60 p-6 sm:p-8">
      <form
        id={formId}
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5"
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor={`${formId}-full-name`} className={labelClassName}>
              {fields.fullName.label}{" "}
              <span className="text-brand-primary-light">*</span>
            </label>
            <input
              id={`${formId}-full-name`}
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder={fields.fullName.placeholder}
              value={values.fullName}
              onChange={update("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={
                errors.fullName ? `${formId}-full-name-error` : undefined
              }
              className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.fullName))}`}
            />
            {errors.fullName ? (
              <p
                id={`${formId}-full-name-error`}
                role="alert"
                className="mt-1.5 font-sans text-sm text-red-300"
              >
                {errors.fullName}
              </p>
            ) : null}
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor={`${formId}-tiktok-username`}
              className={labelClassName}
            >
              {fields.tiktokUsername.label}{" "}
              <span className="text-brand-primary-light">*</span>
            </label>
            <input
              id={`${formId}-tiktok-username`}
              name="tiktokUsername"
              type="text"
              required
              placeholder={fields.tiktokUsername.placeholder}
              value={values.tiktokUsername}
              onChange={update("tiktokUsername")}
              aria-invalid={Boolean(errors.tiktokUsername)}
              aria-describedby={
                errors.tiktokUsername
                  ? `${formId}-tiktok-username-error`
                  : undefined
              }
              className={`${fieldClassName} min-h-[48px] ${fieldBorder(Boolean(errors.tiktokUsername))}`}
            />
            {errors.tiktokUsername ? (
              <p
                id={`${formId}-tiktok-username-error`}
                role="alert"
                className="mt-1.5 font-sans text-sm text-red-300"
              >
                {errors.tiktokUsername}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
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
                className="mt-1.5 font-sans text-sm text-red-300"
              >
                {errors.country}
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
              aria-describedby={
                errors.email ? `${formId}-email-error` : undefined
              }
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
        </div>

        <StarRatingInput
          fieldId={`${formId}-rating`}
          label={fields.rating.label}
          value={values.rating}
          onChange={(rating) => {
            setValues((prev) => ({ ...prev, rating }));
            setErrors((prev) => {
              if (!prev.rating) return prev;
              const nextErrors = { ...prev };
              delete nextErrors.rating;
              return nextErrors;
            });
            setFeedback(null);
          }}
          error={errors.rating}
        />

        <div>
          <label htmlFor={`${formId}-review`} className={labelClassName}>
            {fields.review.label}{" "}
            <span className="text-brand-primary-light">*</span>
          </label>
          <textarea
            id={`${formId}-review`}
            name="review"
            required
            rows={5}
            placeholder={fields.review.placeholder}
            value={values.review}
            onChange={update("review")}
            aria-invalid={Boolean(errors.review)}
            aria-describedby={
              errors.review ? `${formId}-review-error` : undefined
            }
            className={`${fieldClassName} min-h-[140px] max-h-[220px] resize-y ${fieldBorder(Boolean(errors.review))}`}
          />
          {errors.review ? (
            <p
              id={`${formId}-review-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.review}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-profile-photo`} className={labelClassName}>
            {fields.profilePhoto.label}
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              ref={fileInputRef}
              id={`${formId}-profile-photo`}
              name="profilePhoto"
              type="file"
              accept={ACCEPTED_PROFILE_PHOTO_TYPES.join(",")}
              onChange={handleProfilePhotoChange}
              aria-invalid={Boolean(errors.profilePhoto)}
              aria-describedby={
                errors.profilePhoto
                  ? `${formId}-profile-photo-error`
                  : `${formId}-profile-photo-hint`
              }
              className={`block w-full cursor-pointer rounded-lg border border-dashed border-white/15 bg-brand-navy/50 px-4 py-3 font-sans text-sm text-text-muted file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-brand-primary/15 file:px-3 file:py-1.5 file:font-semibold file:text-brand-primary-light transition-colors hover:border-white/25 ${fieldBorder(Boolean(errors.profilePhoto))}`}
            />
            {profilePhotoPreview ? (
              <div
                aria-hidden="true"
                className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-primary/25"
                style={{
                  backgroundImage: `url(${profilePhotoPreview})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : null}
          </div>
          <p
            id={`${formId}-profile-photo-hint`}
            className="mt-1.5 font-sans text-sm text-text-muted/80"
          >
            {fields.profilePhoto.hint}
          </p>
          {errors.profilePhoto ? (
            <p
              id={`${formId}-profile-photo-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.profilePhoto}
            </p>
          ) : null}
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              id={`${formId}-genuine`}
              name="genuineConfirmation"
              type="checkbox"
              checked={values.genuineConfirmation}
              onChange={update("genuineConfirmation")}
              aria-invalid={Boolean(errors.genuineConfirmation)}
              aria-describedby={
                errors.genuineConfirmation
                  ? `${formId}-genuine-error`
                  : undefined
              }
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-brand-navy text-brand-primary focus:ring-2 focus:ring-brand-primary/30"
            />
            <span className="font-sans text-sm leading-relaxed text-text-muted">
              {fields.genuineConfirmation.label}{" "}
              <span className="text-brand-primary-light">*</span>
            </span>
          </label>
          {errors.genuineConfirmation ? (
            <p
              id={`${formId}-genuine-error`}
              role="alert"
              className="mt-1.5 font-sans text-sm text-red-300"
            >
              {errors.genuineConfirmation}
            </p>
          ) : null}
        </div>

        {feedback ? (
          <div
            id={feedbackId}
            role={feedback.type === "success" ? "status" : "alert"}
            aria-live="polite"
            className={`animate-[fadeSlideIn_0.45s_ease-out] rounded-lg border px-4 py-3 font-sans text-sm leading-relaxed ${
              feedback.type === "error"
                ? "border-red-400/40 bg-red-400/10 text-red-200"
                : "border-brand-primary/30 bg-brand-primary/5 text-text-muted"
            }`}
          >
            <p>{feedback.message}</p>
          </div>
        ) : null}

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting || submittedSuccessfully}
            aria-busy={isSubmitting}
            aria-disabled={submittedSuccessfully || undefined}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-lg bg-brand-primary px-7 py-3 font-sans text-sm font-semibold text-brand-navy transition-[background-color,transform] duration-200 hover:bg-brand-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting
              ? "Submitting…"
              : submittedSuccessfully
                ? "Review Submitted"
                : submitLabel}
            {!isSubmitting && !submittedSuccessfully ? (
              <span aria-hidden="true">→</span>
            ) : null}
          </button>

          <p
            id={noticeId}
            className="mt-4 font-sans text-sm leading-relaxed text-text-muted/80"
          >
            {moderationNotice}
          </p>
        </div>
      </form>
    </div>
  );
}

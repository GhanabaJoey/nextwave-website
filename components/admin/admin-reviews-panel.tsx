"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { adminReviewsContent } from "@/content/admin";
import type { ReviewRecord } from "@/lib/reviews/constants";
import {
  primaryCtaClassName,
  secondaryCtaClassName,
} from "@/lib/cta-styles";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/12 bg-brand-navy/70 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-[border-color,box-shadow] duration-200 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

const labelClassName =
  "font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white";

type EditFormState = {
  name: string;
  tiktok_username: string;
  email: string;
  region: string;
  rating: number;
  review: string;
};

function formatSubmittedAt(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(isoDate));
}

function renderStars(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function statusBadgeClass(status: string) {
  switch (status) {
    case "Approved":
      return "bg-brand-primary/15 text-brand-primary-light ring-brand-primary/25";
    case "Rejected":
      return "bg-red-400/10 text-red-200 ring-red-400/25";
    default:
      return "bg-white/8 text-text-muted ring-white/15";
  }
}

function ReviewAdminCard({
  review,
  isEditing,
  isBusy,
  editValues,
  onEditChange,
  onApprove,
  onReject,
  onToggleFeatured,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
}: {
  review: ReviewRecord;
  isEditing: boolean;
  isBusy: boolean;
  editValues: EditFormState;
  onEditChange: (field: keyof EditFormState, value: string | number) => void;
  onApprove: () => void;
  onReject: () => void;
  onToggleFeatured: () => void;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;
}) {
  const { fields, actions, featuredStates } = adminReviewsContent;

  return (
    <article className="rounded-2xl border border-white/10 bg-surface-card p-6 ring-1 ring-white/5 transition-[border-color,box-shadow] duration-300 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="font-display text-2xl font-bold text-white">
            {isEditing ? fields.name : review.name}
          </p>
          <p className="font-sans text-sm text-text-muted">
            {isEditing ? fields.tiktokUsername : review.tiktok_username}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className={`inline-flex rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] ring-1 ${statusBadgeClass(review.status)}`}
          >
            {review.status}
          </span>
          <span className="inline-flex rounded-full bg-white/8 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted ring-1 ring-white/15">
            {review.featured
              ? featuredStates.yes
              : featuredStates.no}
          </span>
        </div>
      </div>

      {isEditing ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClassName}>{fields.name}</label>
            <input
              value={editValues.name}
              onChange={(event) => onEditChange("name", event.target.value)}
              className={`${fieldClassName} min-h-[48px]`}
            />
          </div>
          <div>
            <label className={labelClassName}>{fields.tiktokUsername}</label>
            <input
              value={editValues.tiktok_username}
              onChange={(event) =>
                onEditChange("tiktok_username", event.target.value)
              }
              className={`${fieldClassName} min-h-[48px]`}
            />
          </div>
          <div>
            <label className={labelClassName}>{fields.region}</label>
            <select
              value={editValues.region}
              onChange={(event) => onEditChange("region", event.target.value)}
              className={`${fieldClassName} min-h-[48px] cursor-pointer`}
            >
              {adminReviewsContent.regions.map((region) => (
                <option
                  key={region.value}
                  value={region.value}
                  className="bg-brand-navy"
                >
                  {region.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClassName}>{fields.email}</label>
            <input
              type="email"
              value={editValues.email}
              onChange={(event) => onEditChange("email", event.target.value)}
              className={`${fieldClassName} min-h-[48px]`}
            />
          </div>
          <div>
            <label className={labelClassName}>{fields.rating}</label>
            <select
              value={editValues.rating}
              onChange={(event) =>
                onEditChange("rating", Number.parseInt(event.target.value, 10))
              }
              className={`${fieldClassName} min-h-[48px] cursor-pointer`}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star} className="bg-brand-navy">
                  {star} star{star === 1 ? "" : "s"}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClassName}>{fields.review}</label>
            <textarea
              rows={5}
              value={editValues.review}
              onChange={(event) => onEditChange("review", event.target.value)}
              className={`${fieldClassName} min-h-[140px] resize-y`}
            />
          </div>
        </div>
      ) : (
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className={labelClassName}>{fields.region}</dt>
            <dd className="mt-2 font-sans text-base text-white/90">
              {review.region}
            </dd>
          </div>
          <div>
            <dt className={labelClassName}>{fields.email}</dt>
            <dd className="mt-2 break-all font-sans text-base text-white/90">
              {review.email}
            </dd>
          </div>
          <div>
            <dt className={labelClassName}>{fields.rating}</dt>
            <dd
              className="mt-2 font-sans text-base text-brand-accent"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {renderStars(review.rating)}
            </dd>
          </div>
          <div>
            <dt className={labelClassName}>{fields.submitted}</dt>
            <dd className="mt-2 font-sans text-base text-white/90">
              {formatSubmittedAt(review.created_at)}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className={labelClassName}>{fields.review}</dt>
            <dd className="mt-2 font-sans text-base leading-relaxed text-white/90">
              &ldquo;{review.review}&rdquo;
            </dd>
          </div>
        </dl>
      )}

      <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:flex-wrap">
        {isEditing ? (
          <>
            <button
              type="button"
              disabled={isBusy}
              onClick={onSaveEdit}
              className={primaryCtaClassName}
            >
              {actions.save}
            </button>
            <button
              type="button"
              disabled={isBusy}
              onClick={onCancelEdit}
              className={secondaryCtaClassName}
            >
              {actions.cancel}
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              disabled={isBusy || review.status === "Approved"}
              onClick={onApprove}
              className={primaryCtaClassName}
            >
              {actions.approve}
            </button>
            <button
              type="button"
              disabled={isBusy || review.status === "Rejected"}
              onClick={onReject}
              className={secondaryCtaClassName}
            >
              {actions.reject}
            </button>
            <button
              type="button"
              disabled={isBusy}
              onClick={onStartEdit}
              className={secondaryCtaClassName}
            >
              {actions.edit}
            </button>
            <button
              type="button"
              disabled={isBusy}
              onClick={onToggleFeatured}
              className={secondaryCtaClassName}
            >
              {review.featured ? actions.unfeature : actions.feature}
            </button>
          </>
        )}
      </div>
    </article>
  );
}

export function AdminReviewsPanel() {
  const router = useRouter();
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [busyReviewId, setBusyReviewId] = useState<string | null>(null);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<EditFormState | null>(null);

  const loadReviews = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch("/api/admin/reviews", {
        cache: "no-store",
      });
      const payload = (await response.json()) as {
        reviews?: ReviewRecord[];
        error?: string;
      };

      if (!response.ok) {
        setError(payload.error ?? adminReviewsContent.loadError);
        return;
      }

      setReviews(payload.reviews ?? []);
    } catch {
      setError(adminReviewsContent.loadError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadReviews();
  }, [loadReviews]);

  const performAction = async (
    reviewId: string,
    body: Record<string, unknown>,
  ) => {
    setActionError(null);
    setBusyReviewId(reviewId);

    try {
      const response = await fetch(`/api/admin/reviews/${reviewId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const payload = (await response.json()) as {
        review?: ReviewRecord;
        error?: string;
      };

      if (!response.ok || !payload.review) {
        setActionError(payload.error ?? adminReviewsContent.actionError);
        return false;
      }

      await loadReviews();
      return true;
    } catch {
      setActionError(adminReviewsContent.actionError);
      return false;
    } finally {
      setBusyReviewId(null);
    }
  };

  const handleSignOut = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  const startEdit = (review: ReviewRecord) => {
    setEditingReviewId(review.id);
    setEditValues({
      name: review.name,
      tiktok_username: review.tiktok_username,
      email: review.email,
      region: review.region,
      rating: review.rating,
      review: review.review,
    });
    setActionError(null);
  };

  const cancelEdit = () => {
    setEditingReviewId(null);
    setEditValues(null);
  };

  const saveEdit = async (reviewId: string) => {
    if (!editValues) return;

    const success = await performAction(reviewId, {
      action: "edit",
      data: editValues,
    });

    if (success) {
      cancelEdit();
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setIsLoading(true);
              void loadReviews();
            }}
            className={secondaryCtaClassName}
          >
            {adminReviewsContent.refreshLabel}
          </button>
          <button
            type="button"
            onClick={() => void handleSignOut()}
            className={secondaryCtaClassName}
          >
            {adminReviewsContent.signOutLabel}
          </button>
        </div>
      </div>

      {actionError ? (
        <p role="alert" className="mt-6 font-sans text-sm text-red-300">
          {actionError}
        </p>
      ) : null}

      {isLoading ? (
        <p className="mt-8 font-sans text-base text-text-muted">Loading reviews…</p>
      ) : error ? (
        <p role="alert" className="mt-8 font-sans text-base text-red-300">
          {error}
        </p>
      ) : reviews.length === 0 ? (
        <p className="mt-8 font-sans text-base text-text-muted">
          {adminReviewsContent.emptyState}
        </p>
      ) : (
        <ul className="mt-8 space-y-5">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewAdminCard
                review={review}
                isEditing={editingReviewId === review.id}
                isBusy={busyReviewId === review.id}
                editValues={
                  editingReviewId === review.id && editValues
                    ? editValues
                    : {
                        name: review.name,
                        tiktok_username: review.tiktok_username,
                        email: review.email,
                        region: review.region,
                        rating: review.rating,
                        review: review.review,
                      }
                }
                onEditChange={(field, value) => {
                  setEditValues((current) =>
                    current ? { ...current, [field]: value } : current,
                  );
                }}
                onApprove={() => void performAction(review.id, { action: "approve" })}
                onReject={() => void performAction(review.id, { action: "reject" })}
                onToggleFeatured={() =>
                  void performAction(review.id, { action: "toggle_featured" })
                }
                onStartEdit={() => startEdit(review)}
                onCancelEdit={cancelEdit}
                onSaveEdit={() => void saveEdit(review.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

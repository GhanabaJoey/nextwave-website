"use client";

import { useId, useState } from "react";
import { faqContent, type FaqItem } from "@/content/home";

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  buttonId,
  panelId,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  buttonId: string;
  panelId: string;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-4 text-left text-base font-semibold text-white transition-colors hover:text-brand-primary-light sm:px-4"
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-sm transition-transform ${isOpen ? "rotate-45 border-brand-primary bg-brand-primary/15 text-brand-primary shadow-[0_0_12px_rgba(0,174,239,0.35)]" : "border-white/15 text-text-muted"}`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-3 pb-4 text-sm leading-relaxed text-text-muted sm:px-4"
      >
        {item.answer}
      </div>
    </div>
  );
}

export function FaqAccordion() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(faqContent.items[0]?.id ?? null);

  return (
    <div>
      {faqContent.items.map((item) => {
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        const isOpen = openId === item.id;

        return (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={isOpen}
            buttonId={buttonId}
            panelId={panelId}
            onToggle={() =>
              setOpenId((current) => (current === item.id ? null : item.id))
            }
          />
        );
      })}
    </div>
  );
}

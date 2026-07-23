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
          className="flex w-full items-start justify-between gap-4 py-5 text-left font-sans text-base font-semibold text-white transition-colors hover:text-brand-primary-light focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary sm:py-6 sm:text-[17px] motion-reduce:transition-none"
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            className={`mt-0.5 shrink-0 text-lg leading-none text-brand-primary transition-transform duration-200 motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
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
        className="pb-5 font-sans text-base leading-relaxed text-text-muted sm:pb-6"
      >
        {item.answer}
      </div>
    </div>
  );
}

export function FaqAccordion() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(
    faqContent.items[0]?.id ?? null,
  );

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

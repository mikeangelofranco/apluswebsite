"use client";

import { useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { faqs } from "@/lib/data";

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<string>(faqs[0].question);

  return (
    <SectionShell
      label="FAQ Section"
      title="Answers designed to make your next step feel clear"
      contentClassName="mx-auto max-w-4xl"
    >
      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openQuestion === faq.question;

          return (
            <div key={faq.question} className="rounded-[1.5rem] border border-[#E8DDD1] bg-white/75">
              <button
                type="button"
                onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-[#5A3D28]">{faq.question}</span>
                <span className="text-2xl text-[#B8863B]">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <div className="border-t border-[#E8DDD1] px-6 py-5">
                  <p className="text-base leading-8 text-[#6F5846]">{faq.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

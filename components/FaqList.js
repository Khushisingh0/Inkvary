"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FaqList({ items = faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <article key={item.q} className={active ? "faq-item open" : "faq-item"}>
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span>{item.q}</span>
              <i aria-hidden="true">{active ? "–" : "+"}</i>
            </button>
            {active ? <p>{item.a}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

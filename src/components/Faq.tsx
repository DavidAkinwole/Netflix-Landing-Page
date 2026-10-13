"use client";
import { useState } from "react";

const faqs = [
  { q: "What is this service?", a: "A streaming service that offers a wide variety of TV shows, movies, and more on thousands of internet-connected devices." },
  { q: "How much does it cost?", a: "Plans range from ₦2,500 a month. No extra costs, no contracts." },
  { q: "Where can I watch?", a: "Anywhere, on your phone, tablet, laptop, or TV." },
  { q: "How do I cancel?", a: "Easily, online, in two clicks. No cancellation fees. Cancel anytime." },
  { q: "What can I watch?", a: "A huge library of films, series, documentaries, and originals." },
  { q: "Is it good for kids?", a: "Yes. Kids profiles come with parental controls and are free with your membership." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-10">
      <h2 className="mb-4 text-xl font-bold">Frequently Asked Questions</h2>
      <ul className="flex flex-col gap-2">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <li key={f.q} className="bg-neutral-800">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold hover:bg-neutral-700"
              >
                {f.q}
                <span className={`text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              {isOpen && (
                <p className="border-t border-black px-5 py-4 text-sm text-gray-300">{f.a}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
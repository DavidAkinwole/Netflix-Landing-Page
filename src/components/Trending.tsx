"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const movies = [
  { title: "Movie 1", image: "/poster/poster-1.jpg" },
  { title: "Movie 2", image: "/poster/poster-2.jpg" },
  { title: "Movie 3", image: "/poster/poster-3.jpg" },
  { title: "Movie 4", image: "/poster/poster-4.jpg" },
  { title: "Movie 5", image: "/poster/poster-5.jpg" },
  { title: "Movie 6", image: "/poster/poster-6.jpg" },
  { title: "Movie 7", image: "/poster/poster-7.jpg" },
  { title: "Movie 8", image: "/poster/poster-8.jpg" },
  { title: "Movie 9", image: "/poster/poster-9.jpg" },
  { title: "Movie 10", image: "/poster/poster-10.jpg" },
];

export default function Trending() {
  const rowRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10">
      <h2 className="mb-4 text-xl font-bold">Trending Now</h2>

      <div className="relative">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-0 z-10 flex h-full w-10 items-center justify-center rounded-r-md bg-black/70 text-white transition hover:bg-black/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Poster row (scrollbar hidden) */}
        <ul
          ref={rowRef}
          onScroll={updateArrows}
          className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar:none] [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((m, i) => (
            <li
              key={m.title}
              className="relative h-48 w-36 shrink-0 overflow-hidden rounded-md"
            >
              <Image
                src={m.image}
                alt={m.title}
                fill
                sizes="144px"
                className="object-cover transition duration-300 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/80 to-transparent" />
              <span
                className="pointer-events-none absolute bottom-0 left-2 select-none text-7xl font-black leading-none"
                style={{
                  color: "rgba(0,0,0,0.5)",
                  WebkitTextStroke: "2px white",
                }}
              >
                {i + 1}
              </span>
            </li>
          ))}
        </ul>

        {/* Right arrow */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-0 z-10 flex h-full w-10 items-center justify-center rounded-l-md bg-black/70 text-white transition hover:bg-black/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
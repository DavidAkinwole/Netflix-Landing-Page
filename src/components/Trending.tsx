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
  return (
    <section className="py-10">
      <h2 className="mb-4 text-xl font-bold">Trending Now</h2>
      <ul className="flex gap-4 overflow-x-auto pb-4 [scrollbar-none]">
        {movies.map((m, i) => (
          <li key={m.title} className="relative h-48 w-36 shrink-0 overflow-hidden rounded-md">
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
    </section>
  );
}
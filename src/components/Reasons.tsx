const reasons = [
  {
    title: "Enjoy on your TV",
    text: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "📺",
  },
  {
    title: "Download your shows to watch offline",
    text: "Save your favorites easily and always have something to watch.",
    icon: "⬇️",
  },
  {
    title: "Watch everywhere",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "🚀",
  },
  {
    title: "Create profiles for kids",
    text: "Send kids on adventures with their favorite characters in a space made just for them, free with your membership.",
    icon: "🧒",
  },
];

export default function Reasons() {
  return (
    <section className="py-10">
      <h2 className="mb-4 text-xl font-bold">More Reasons to Join</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="relative flex min-h-48 flex-col justify-between rounded-2xl bg-linear-to-br from-indigo-950 to-slate-900 p-5"
          >
            <div>
              <h3 className="mb-2 text-lg font-semibold leading-tight">{r.title}</h3>
              <p className="text-sm text-gray-400">{r.text}</p>
            </div>
            <span className="self-end text-3xl">{r.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
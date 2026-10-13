"use client";
import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Get started with: ${email}`);
  };

  return (
    <div className="mx-auto max-w-xl px-4">
      <p className="mb-3 text-center text-sm">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="h-12 flex-1 rounded border border-white/40 bg-black/60 px-4 text-sm placeholder:text-gray-400 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="h-12 rounded bg-red-600 px-6 font-semibold transition hover:bg-red-700"
        >
          Get Started &gt;
        </button>
      </form>
    </div>
  );
}
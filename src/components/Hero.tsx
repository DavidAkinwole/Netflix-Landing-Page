import Image from "next/image";
import EmailForm from "./EmailForm";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b-2 border-red-900/60 pb-24">
      <Image
        src="/images/hero-banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-black/60" />
  
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-black to-transparent" />

     <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
  <Image
    src="/icon.png"
    alt="Netflix"
    width={120}
    height={40}
    priority
    className="h-10 w-auto"
  />
  <button className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium hover:bg-red-700">
    Sign In
  </button>
</header>

      <div className="mx-auto mt-24 max-w-2xl px-4 text-center">
        <h1 className="mb-3 text-4xl font-extrabold sm:text-5xl normal-case">
          In the mood for great entertainment?
        </h1>
        <p className="mb-6 text-sm font-semibold">Starts at ₦2,500. Cancel anytime.</p>
        <EmailForm />
      </div>
    </section>
  );
}
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Reasons from "@/components/Reasons";
import Faq from "@/components/Faq";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <div className="mx-auto max-w-5xl px-4">
        <Trending />
        <Reasons />
        <Faq />
        <section className="py-12 text-center">
          <EmailForm />
        </section>
        <Footer />
      </div>
    </main>
  );
}
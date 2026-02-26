import { Header, Hero, HowItWorks, Features, Pricing, CTA, Footer } from "@/components/landing";
import QuizSection from "@/components/QuizSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <QuizSection />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import { Header, Hero, HowItWorks, Features, Pricing, CTA, Footer } from "@/components/landing";
import QuizSection from "@/components/QuizSection";
import WaitlistProvider from "@/components/landing/WaitlistProvider";

export default function Home() {
  return (
    <WaitlistProvider>
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
    </WaitlistProvider>
  );
}

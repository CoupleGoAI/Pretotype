import { Header, Hero, HowItWorks, Features, Pricing, CTA, Footer, AndroidBeta, AndroidBetaBanner } from "@/components/landing";
import QuizSection from "@/components/QuizSection";
import WaitlistProvider from "@/components/landing/WaitlistProvider";
import { SHOW_PRICING } from "@/flags";

export default function Home() {
  return (
    <WaitlistProvider>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <QuizSection />
        <AndroidBetaBanner />
        {SHOW_PRICING && <Pricing />}
        <AndroidBeta />
        <CTA />
        <div className="h-8 sm:h-12" />
      </main>
      <Footer />
    </WaitlistProvider>
  );
}

import CTASection from "./components/CTASection";
import CurrentChallengesSection from "./components/CurrentChallengesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinFunSection from "./components/JoinFunSection";
import TestimonialSection from "./components/TestimonialSection";
import UnlockPotentialSection from "./components/UnlockPotentialSection";

export default function ClaudeLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <JoinFunSection />
        <CurrentChallengesSection />
        <UnlockPotentialSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

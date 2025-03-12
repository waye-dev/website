import HeroSection from "./components/landing-page/hero-section";
import ServicesSection from "./components/landing-page/service-section";
import EmailSignup from "@/app/components/email-signup";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <EmailSignup />
    </div>
  );
}

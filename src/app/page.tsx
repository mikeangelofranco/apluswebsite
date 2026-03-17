import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BrandStatement } from "@/components/BrandStatement";
import { SignatureVisualStrip } from "@/components/SignatureVisualStrip";
import { FeaturedTreatments } from "@/components/FeaturedTreatments";
import { SpecialistsSection } from "@/components/SpecialistsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ResultsSection } from "@/components/ResultsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PatientJourney } from "@/components/PatientJourney";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesDirectory } from "@/components/ServicesDirectory";
import { FoundersStory } from "@/components/FoundersStory";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhiteCanvas } from "@/components/WhiteCanvas";

export default function HomePage() {
  return (
    <main className="px-4 py-4 md:px-8 md:py-8 lg:px-10">
      <WhiteCanvas>
        <Header />
        <HeroSection />
        <BrandStatement />
        <SignatureVisualStrip />
        <FeaturedTreatments />
        <SpecialistsSection />
        <WhyChooseUs />
        <ResultsSection />
        <ExperienceSection />
        <PatientJourney />
        <TestimonialsSection />
        <ServicesDirectory />
        <FoundersStory />
        <FAQSection />
        <CTASection />
        <Footer />
      </WhiteCanvas>
    </main>
  );
}

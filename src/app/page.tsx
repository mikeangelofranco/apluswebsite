import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BrandPositioningSection } from "@/components/BrandPositioningSection";
import { TreatmentCategoriesSection } from "@/components/TreatmentCategoriesSection";
import { SpecialistsSection } from "@/components/SpecialistsSection";
import { ResultsPreviewSection } from "@/components/ResultsPreviewSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BranchesSection } from "@/components/BranchesSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhiteCanvas } from "@/components/WhiteCanvas";

export default function HomePage() {
  return (
    <main className="overflow-x-clip px-2 py-2 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
      <WhiteCanvas>
        <Header />
        <HeroSection />
        <BrandPositioningSection />
        <TreatmentCategoriesSection />
        <SpecialistsSection />
        <ResultsPreviewSection />
        <TestimonialsSection />
        <BranchesSection />
        <FinalCTASection />
        <Footer />
      </WhiteCanvas>
    </main>
  );
}

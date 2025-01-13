
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
import FeatureLine from "@/components/FeatureLines";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import OnlinePackage from "@/components/OnlinePackage";
import OfficeSection from "@/components/OfficeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Services/>
      <FeatureLine/>
      <OnlinePackage/>
      <TestimonialsGrid/>
      <OfficeSection/>
      <Footer/>
    </div>
  );
}

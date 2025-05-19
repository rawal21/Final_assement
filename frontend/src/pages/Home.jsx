// src/pages/Home.jsx

import HeroSection from "../Components/HeroSection";
import CompanySlider from "../Components/Company";
import MonitoringCard from "../Components/Monitoring/MonitoringCard";
import HeroBanner from "../Components/HeroBanner";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import DemoBanner from "../Components/DemoBanner";
import FAQSection from "../Components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanySlider />
      <MonitoringCard />
      <HeroBanner />
      <FeatureSection />
      <DemoBanner />
      <FAQSection />
    </main>
  );
}

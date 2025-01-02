import React from "react";
import HeroSlider from "./_components/HeroSlider";
import AboutSection from "./_components/AboutSection";
import DailyNews from "./_components/DailyNews";
import BusinessGrid from "./_components/BusinessCard";
import CareersHome from "./_components/CareersHome";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSlider />
      <AboutSection />
      <BusinessGrid/>
      <DailyNews />
      <CareersHome/>
    </div>
  );
}

import React from "react";
import HeroSlider from "./_components/HeroSlider";
import AboutSection from "./_components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSlider />
      <AboutSection />
    </div>
  );
}
"use client";

import { Carousel, useCarousel } from "@/components/carousel";
import { Dock } from "@/components/dock";
import {
  PhilosophySlide,
  AscentSlide,
  ChallengesSlide,
  ContactSlide,
  PersonalSlide,
} from "@/components/slides";

export default function Home() {
  const { activeIndex, goToSection } = useCarousel();

  return (
    <>
      <Carousel activeIndex={activeIndex}>
        <PhilosophySlide />
        <AscentSlide />
        <ChallengesSlide />
        <ContactSlide />
        <PersonalSlide />
      </Carousel>
      <Dock activeIndex={activeIndex} onNavigate={goToSection} />
    </>
  );
}

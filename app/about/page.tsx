import ContactSection from "@/components/about/Contact";
import FAQ from "@/components/about/FAQ";
import Impact from "@/components/about/Impact";
import Partners from "@/components/about/Partners";
import Story from "@/components/about/Story";
import Testimonials from "@/components/about/Testimonials";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <main className="bg-cream text-foreground">
      <PageHero
        eyebrow="About The Voice of Dryland Soils"
        title={
          <>
            Building a future where
            <br />
            <p className="text-sand">every hectare can thrive.</p>
          </>
        }
        lede="The Voice of Dryland Soils is leading a movement to regenerate Africa's drylands through science, innovation, and community action. We partner with farmers, governments, researchers, and investors to restore ecosystems, strengthen food security, improve climate resilience, and unlock sustainable opportunities for generations to come."
        image="/soil-hands.jpg"
        imageAlt="African farmer examining healthy soil"
      />

      <Story />
      
      <Impact />
      {/* <Partners /> */}
      {/* <Testimonials/> */}
      <FAQ />
      <ContactSection />
    </main>
  );
};

export default page;

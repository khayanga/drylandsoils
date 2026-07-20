import Testimonials from "@/components/about/Testimonials";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";
import Challenge from "@/components/home/Challenge";
import CTA from "@/components/home/CTA";

import FeaturedServices from "@/components/home/FeaturedServices";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Intro from "@/components/home/Intro";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col ">
    <Hero/>
    <Intro/>
    <Challenge/>
    
    <FeaturedServices/>
    <Vision />
          {/* <Values /> */}
    {/* <Testimonials/> */}
    {/* <Impact/> */}
    <CTA/>
   </div>
  );
}

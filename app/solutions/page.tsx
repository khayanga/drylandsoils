import PageHero from "@/components/PageHero";
import CTASection from "@/components/solutions/Cta";
import ServiceBlock, {
  type Service,
} from "@/components/solutions/ServiceBlock";
import {
  BookOpen,
  CloudSun,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { type StaticImageData } from "next/image";
import React from "react";

const staticImage = (src: string) => src as unknown as StaticImageData;

const page = () => {
  const services: Service[] = [
    {
      id: "advocacy",
      icon: Megaphone,
      title: "Advocacy",
      tagline: "Making soil a matter of public record.",
      body: "We turn scientific evidence into legislation, standing with communities in ministries, parliaments, and international forums to ensure dryland soils are named, protected, and funded.",
      points: [
        "National soil health frameworks",
        "Coalition-building across ministries",
        "Public campaigns and media briefings",
      ],
      image: staticImage("/farmer-soil.jpg"),
      caseTitle: "A national soil health bill, drafted with farmers.",
      caseLocation: "Nairobi, Kenya",
      caseBody:
        "Working with 34 farmer cooperatives, we co-authored the first national framework recognising dryland soil as critical infrastructure.",
      metric: { v: "34", l: "Cooperatives at the table" },
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Regenerative Agriculture Training",
      tagline: "Field schools rooted in local wisdom.",
      body: "Season-long farmer field schools that combine ancestral practice with modern regenerative science — cover cropping, composting, agroforestry, and holistic land management.",
      points: [
        "Full-season farmer field schools",
        "Train-the-trainer for extension officers",
        "Curricula co-designed with elders",
      ],
      image: staticImage("/training.jpg"),
      caseTitle: "1,200 farmers, one growing season.",
      caseLocation: "Sahel, Burkina Faso",
      caseBody:
        "Zaï pits and cover crops introduced in three districts lifted average yields 38% while restoring topsoil in a single season.",
      metric: { v: "+38%", l: "Average yield gain" },
    },
    {
      id: "testing",
      icon: FlaskConical,
      title: "Soil Testing & Analysis",
      tagline: "Diagnosis before prescription.",
      body: "Accredited laboratory work and on-farm mobile diagnostics give every farm, cooperative, and researcher a clear, honest picture of what the soil holds — and what it needs.",
      points: [
        "ISO-aligned lab analysis",
        "Mobile field-testing units",
        "Farmer-friendly soil reports",
      ],
      image: staticImage("/soil-hands.jpg"),
      caseTitle: "The mobile lab that reached Adwa.",
      caseLocation: "Tigray, Ethiopia",
      caseBody:
        "Our mobile soil unit delivered 1,200 first-ever soil reports across five woredas — turning guesswork into precision.",
      metric: { v: "1,200", l: "Soil reports issued" },
    },
    {
      id: "agroecology",
      icon: Sprout,
      title: "Agroecological Soil Solutions",
      tagline: "Restoration written for each landscape.",
      body: "Bespoke, science-led restoration plans — biological inputs, cover crops, agroforestry, and water-smart design — matched to climate, culture, and crop.",
      points: [
        "Whole-farm restoration plans",
        "Biological input programmes",
        "Agroforestry and water design",
      ],
      image: staticImage("/farmer-soil.jpg"),
      caseTitle: "Two hectares brought back to life.",
      caseLocation: "Turkana, Kenya",
      caseBody:
        "A grandmother's silent field returned to millet, sorghum, and birdsong after three seasons of cover crops and biochar.",
      metric: { v: "3", l: "Seasons to recovery" },
    },
    {
      id: "climate",
      icon: CloudSun,
      title: "Climate-Smart Agriculture Consultancy",
      tagline: "Farming systems built for a changing climate.",
      body: "Advisory for governments, cooperatives, and commercial farms designing production systems that sequester carbon, hold water, and stay resilient under drought.",
      points: [
        "Climate-risk farm audits",
        "Carbon and water accounting",
        "Adaptation roadmaps",
      ],
      image: staticImage("/aerial-regeneration.jpg"),
      caseTitle: "A drought playbook for a cooperative.",
      caseLocation: "Northern Uganda",
      caseBody:
        "An 800-farm cooperative adopted our climate-smart playbook and held yields steady through the driest season on record.",
      metric: { v: "800", l: "Farms advised" },
    },
    {
      id: "research",
      icon: BookOpen,
      title: "Research & Policy",
      tagline: "Evidence that governments can act on.",
      body: "Peer-reviewed studies, open datasets, and policy briefs that give decision-makers the clarity to invest in soil — and the language to defend it.",
      points: [
        "Long-term field trials",
        "Open soil health datasets",
        "Policy briefs and white papers",
      ],
      image: staticImage("/soil-hands.jpg"),
      caseTitle: "A dataset the continent could share.",
      caseLocation: "Pan-African",
      caseBody:
        "Our open dryland soil database now underpins programmes in eleven countries and three multilateral agencies.",
      metric: { v: "11", l: "Countries using our data" },
    },
  ];
  return (
    <main className="flex flex-col  bg-cream text-foreground">
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Restoring Africa's drylands.
            <br />
            <p className="text-sand">
              Creating impact that lasts generations.
            </p>
          </>
        }
        lede="The Voice of Dryland Soils delivers integrated solutions that connect scientific research, regenerative agriculture, policy influence, and community action. By restoring soil health, we strengthen food systems, improve climate resilience, unlock sustainable livelihoods, and create scalable opportunities for investment across Africa's drylands."
        image="/aerial-regeneration.jpg"
        imageAlt="Aerial view of regenerating drylands"
      />

      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}

      <CTASection />
    </main>
  );
};

export default page;

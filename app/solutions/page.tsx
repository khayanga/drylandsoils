
import ContactSection from "@/components/about/Contact";
import FAQ from "@/components/about/FAQ";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/solutions/Cta";
import ServiceBlock, {
  type Service,
} from "@/components/solutions/ServiceBlock";
import {
  BookOpen,
  CloudSun,
  Factory,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Sprout,
} from "lucide-react";
import { StaticImageData } from "next/image";

const staticImage = (src: string) => src as unknown as StaticImageData;

export default function Page() {
  const services: Service[] = [
    {
      id: "advocacy",
      icon: Megaphone,
      title: "Dryland Soil Advocacy",
      tagline: "Championing healthy soils for resilient communities.",
      body:
        "We champion the potential of Africa's dryland soils through advocacy, storytelling, strategic partnerships, and evidence-based engagement. By amplifying farmers' voices and promoting sustainable land management, we influence policies and investments that protect soils and strengthen food systems.",
      offerings: [
        "Dryland soil advocacy campaigns",
        "Farmer and community storytelling",
        "Policy dialogue and stakeholder engagement",
        "Awareness programmes on sustainable land management",
        "Knowledge sharing and public education",
      ],
      image: staticImage("/farmer-soil.jpg"),
    },

    {
      id: "training",
      icon: GraduationCap,
      title: "Farmer Training & Capacity Building",
      tagline: "Empowering farmers through knowledge and practical skills.",
      body:
        "Healthy soils begin with informed farmers. We deliver practical training in regenerative agriculture, climate-smart farming, organic soil fertility management, and sustainable production systems that improve productivity while restoring the land.",
      offerings: [
        "Climate-smart agriculture training",
        "Regenerative farming practices",
        "Organic soil fertility management",
        "Farmer field demonstrations",
        "Capacity building for farmer groups and institutions",
      ],
      image: staticImage("/training.jpg"),
    },

    {
      id: "testing",
      icon: FlaskConical,
      title: "Soil Sampling, Testing & Analysis",
      tagline: "Better information. Better decisions. Better yields.",
      body:
        "Every productive farm starts with understanding the soil. We provide professional soil sampling, laboratory testing, analysis, and practical recommendations that help farmers improve soil health, optimise nutrient use, and increase crop productivity.",
      offerings: [
        "Professional soil sampling",
        "Laboratory soil analysis",
        "Comprehensive soil health reports",
        "Crop-specific nutrient recommendations",
        "Soil fertility monitoring",
      ],
      image: staticImage("/soil-hands.jpg"),
    },

    {
      id: "solutions",
      icon: Sprout,
      title: "Organic Soil Solutions",
      tagline: "Restoring soils naturally for sustainable production.",
      body:
        "We provide environmentally friendly soil restoration solutions that improve soil fertility, water retention, biological activity, and long-term productivity. Our solutions are tailored to the needs of farmers across dryland regions.",
      offerings: [
        "Organic fertilizer solutions",
        "Biochar soil amendment",
        "Frass fertilizer recommendations",
        "Well-decomposed organic manure",
        "Farm-specific soil restoration plans",
      ],
      image: staticImage("/hero-dryland.jpg"),
    },

    {
      id: "consultancy",
      icon: CloudSun,
      title: "Agricultural Advisory & Consultancy",
      tagline: "Technical guidance for resilient and profitable farming.",
      body:
        "We support farmers, cooperatives, organisations, NGOs, and institutions with professional agricultural advisory services that promote sustainable farming, climate resilience, and improved farm performance.",
      offerings: [
        "Farm planning and management",
        "Climate-smart agriculture advisory",
        "Organic input recommendations",
        "Project implementation support",
        "Monitoring, evaluation and learning",
      ],
      image: staticImage("/aerial-regeneration.jpg"),
    },

    {
      id: "research",
      icon: BookOpen,
      title: "Research, Innovation & Knowledge",
      tagline: "Transforming evidence into practical solutions.",
      body:
        "We generate and share practical knowledge that bridges science and farming. Through research, innovation, documentation, and collaboration, we develop evidence-based solutions that improve soil health, farming systems, and livelihoods across Africa's drylands.",
      offerings: [
        "Applied soil and agriculture research",
        "Knowledge documentation and publications",
        "Innovation in regenerative agriculture",
        "Partnerships with research institutions",
        "Learning resources for farmers and practitioners",
      ],
      image: staticImage("/training.jpg"),
    },
  ];

  return (
    <main className="flex flex-col bg-cream text-foreground">
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Healthy soils,
            <br />
            <span className="text-sand">Resilient farms,</span>
            <br />
            Better futures.
          </>
        }
        lede="The Voice of Dryland Soils provides integrated soil health solutions from advocacy and storytelling to soil testing, farmer capacity building, climate-smart agriculture, and agroecological restoration helping farmers build productive, profitable, and resilient farming systems."
        image="/aerial-regeneration.jpg"
        imageAlt="Aerial view of regenerating drylands"
      />

      {services.map((service, index) => (
        <ServiceBlock
          key={service.id}
          service={service}
          index={index}
        />
      ))}
      

      <CTASection />
      <FAQ/>
      <ContactSection/>

    </main>
  );
}
import ContactSection from "@/components/about/Contact";
import FAQ from "@/components/about/FAQ";
import PageHero from "@/components/PageHero";
import AgricultureConsultancy from "@/components/solutions/Agriculture Cosultancy";
import CTASection from "@/components/solutions/Cta";
import ServiceBlock from "@/components/solutions/ServiceBlock";
import SoilDiagnostics from "@/components/solutions/SoilDiagnostics";

export default function Page() {
  return (
    <main className="flex flex-col bg-cream text-foreground">
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Practical solutions
            <br />
            <span className=" text-sand">
              for healthier soils and resilient agriculture.
            </span>
          </>
        }
        lede="We combine soil science, regenerative agriculture, farmer training, and evidence-based advisory to restore dryland ecosystems, improve productivity, and strengthen farming communities across Africa."
        image="/hands.jpg"
        imageAlt="Soil restoration and regenerative agriculture"
      />
      <ServiceBlock />
      <SoilDiagnostics />
      <AgricultureConsultancy />
      <CTASection />
      {/* <FAQ/> */}
      <ContactSection />
    </main>
  );
}

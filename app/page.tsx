import {
  Hero,
  Services,
  WhyChooseUs,
  AboutFamily,
  Testimonials,
  FAQ,
  Zones,
  ContactCTA,
} from "@/components/sections";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <FAQPageJsonLd />
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutFamily />
      <Testimonials />
      <FAQ />
      <Zones />
      <ContactCTA />
    </>
  );
}

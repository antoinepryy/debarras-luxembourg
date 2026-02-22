import {
  Hero,
  Services,
  WhyChooseUs,
  AboutFamily,
  Testimonials,
  FAQ,
  Zones,
  ContactCTA,
  GoogleReviews,
} from "@/components/sections";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <FAQPageJsonLd />
      <Hero />
      <GoogleReviews />
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

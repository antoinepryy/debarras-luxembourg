import {
  Hero,
  Services,
  WhyChooseUs,
  Categories,
  AboutFamily,
  Testimonials,
  FAQ,
  Zones,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Categories limit={8} />
      <AboutFamily />
      <Testimonials />
      <FAQ />
      <Zones />
      <ContactCTA />
    </>
  );
}

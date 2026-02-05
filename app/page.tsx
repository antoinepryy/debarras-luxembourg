import {
  Hero,
  Services,
  Categories,
  AboutFamily,
  Zones,
  ContactCTA,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Categories limit={8} />
      <AboutFamily />
      <Testimonials />
      <Zones />
      <ContactCTA />
    </>
  );
}

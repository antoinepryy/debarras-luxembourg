import {
  Hero,
  Services,
  Categories,
  AboutFamily,
  Zones,
  ContactCTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Categories limit={8} />
      <AboutFamily />
      <Zones />
      <ContactCTA />
    </>
  );
}

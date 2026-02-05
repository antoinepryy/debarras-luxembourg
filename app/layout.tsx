import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/ui";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Expertise & Rachat d'antiquités`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "débarras luxembourg",
    "antiquités luxembourg",
    "rachat antiquités",
    "expertise objets anciens",
    "débarras maison",
    "brocante luxembourg",
    "vide maison",
    "estimation antiquités",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "fr_LU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Expertise & Rachat d'antiquités`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Expertise & Rachat d'antiquités`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

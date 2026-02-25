import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/ui";
import { PhoneClickTracker } from "@/components/tracking/PhoneClickTracker";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { GA_TRACKING_ID } from "@/lib/gtag";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Service de débarras professionnel`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "débarras luxembourg",
    "débarras maison",
    "vide maison",
    "débarras appartement",
    "débarras cave",
    "débarras grenier",
    "évacuation encombrants",
    "débarras professionnel luxembourg",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "fr_LU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Service de débarras professionnel`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/hero/hero-bg-2.jpg", width: 1200, height: 630, alt: "Débarras Luxembourg - Service professionnel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Service de débarras professionnel`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/hero-bg-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "CHVte6zQixgedJxVeQJvjCD95s2xCf6USqYlhUaZPQ0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
        <PhoneClickTracker />
      </body>
    </html>
  );
}

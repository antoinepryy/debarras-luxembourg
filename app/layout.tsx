import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingContact } from "@/components/ui";
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Service de débarras professionnel`,
    description: SITE_DESCRIPTION,
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

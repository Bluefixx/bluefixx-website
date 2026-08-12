import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluefixxllp.com"),
  title: "BlueFixx | Trusted hands for every job",
  description: "BlueFixx connects verified professionals, eager customers, and the next generation of apprentices in one unified marketplace. Find reliable home services today.",
  keywords: ["home services", "verified professionals", "handyman", "plumber", "electrician", "apprenticeships", "Africa", "BlueFixx"],
  openGraph: {
    title: "BlueFixx | Trusted hands for every job",
    description: "BlueFixx connects verified professionals, eager customers, and the next generation of apprentices in one unified marketplace.",
    url: "https://bluefixxllp.com",
    siteName: "BlueFixx",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "BlueFixx - Professional Home Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueFixx | Trusted hands for every job",
    description: "BlueFixx connects verified professionals, eager customers, and the next generation of apprentices in one unified marketplace.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-1000">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}


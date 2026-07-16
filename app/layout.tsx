import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter, Playfair_Display} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://voiceofdrylandsoils.org"),

  title: {
    default: "The Voice of Dryland Soils",
    template: "%s | The Voice of Dryland Soils",
  },

  description:
    "The Voice of Dryland Soils is a pan-African organization advancing soil restoration, regenerative agriculture, climate-smart farming, research, advocacy, and farmer-led innovation to build resilient landscapes and thriving communities.",

  keywords: [
    "Dryland Soils",
    "Soil Restoration",
    "Regenerative Agriculture",
    "Climate Smart Agriculture",
    "Soil Health Africa",
    "Sustainable Agriculture",
    "Farmer Training",
    "Agroecology",
    "Soil Testing",
    "Environmental Conservation",
    "Land Restoration",
    "Agricultural Research",
    "Policy Advocacy",
    "Food Security",
    "Africa",
    "Dryland Farming",
    "Carbon Sequestration",
    "Landscape Restoration",
  ],

  authors: [
    {
      name: "The Voice of Dryland Soils",
    },
  ],

  creator: "The Voice of Dryland Soils",

  publisher: "The Voice of Dryland Soils",

  applicationName: "The Voice of Dryland Soils",

  category: "Agriculture",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "The Voice of Dryland Soils",

    description:
      "Championing healthy soils through science, advocacy, regenerative agriculture, farmer training, and climate-smart solutions across Africa.",

    url: "https://voiceofdrylandsoils.org",

    siteName: "The Voice of Dryland Soils",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Voice of Dryland Soils",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "The Voice of Dryland Soils",

    description:
      "Building resilient landscapes through soil restoration, regenerative agriculture, research, and community-led innovation.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
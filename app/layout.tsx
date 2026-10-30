import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hydphotography.com"),

  title: {
    default: "HYD Photography | Wedding, Corporate & Automotive Photography in Hyderabad",
    template: "%s | HYD Photography",
  },

  description:
    "HYD Photography captures weddings, pre-weddings, maternity, baby, portraits, corporate events and automotive photography in Hyderabad.",

  keywords: [
    "HYD Photography",
    "Photography Hyderabad",
    "Wedding Photography Hyderabad",
    "Wedding Photographer Hyderabad",
    "Pre Wedding Photography Hyderabad",
    "Maternity Photography Hyderabad",
    "Baby Photography Hyderabad",
    "Corporate Events & Automotive Hyderabad",
    "Automotive Photography Hyderabad",
    "Portrait Photography Hyderabad",
  ],

  authors: [
    {
      name: "HYD Photography",
      url: "https://www.hydphotography.com",
    },
  ],

  creator: "HYD Photography",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.hydphotography.com",
    siteName: "HYD Photography",
    title: "HYD Photography | Wedding, Corporate & Automotive Photography in Hyderabad",
    description:
      "Capturing moments, emotions and memories that stay with you forever.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "HYD Photography",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HYD Photography | Hyderabad",
    description:
      "Capturing moments, emotions and memories that stay with you forever.",
    images: ["/logo.png"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
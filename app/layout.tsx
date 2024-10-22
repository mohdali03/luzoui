import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import Header from "@/components/Header"; 

import "./globals.css"; 

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luzoui.vercel.app/"),
  title: {
    template: `%s | Luzo.app`,
    default: "Luzo.app",
  },
  description: "Discover seamless services with the Luzo.app platform, offering modern UI and user-friendly experiences.",
  keywords: ["Luzo app", "seamless services", "modern UI", "technology"],
  alternates: {
    canonical: "/",
  },
  category: "Technology & Sailon",
  openGraph: {
    title: "Luzo.app",
    description: "Discover seamless services with the Luzo.app platform.",
    url: "https://luzoui.vercel.app/",
    type: "website",
    siteName: "Luzo.app",
    images: [
      {
        url: "https://play-lh.googleusercontent.com/R_DOL0zVdIK_9rnrM195QcmHoePIgOs1hJJbHNO2Fsz915wlfS__4JK79pFQ3NIWQA=w240-h480-rw",
      },
    ],
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
        className={`${poppins.variable} antialiased`} 
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

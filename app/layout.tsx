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
  metadataBase: new URL("https://luzoapp.vercel.app"),
  title: {
    template: `%s | Luzo.app`,
    default: "Luzo.app",
  },
  description: "Discover seamless services with the Luzo.app platform, offering modern UI and user-friendly experiences.",
  keywords: ["Luzo app", "seamless services", "modern UI", "technology"],
  alternates: {
    canonical: "/",
  },
  category: "Technology",
  openGraph: {
    title: "Luzo.app",
    description: "Discover seamless services with the Luzo.app platform.",
    url: "https://luzoapp.vercel.app",
    type: "website",
    siteName: "Luzo.app",
    images: [
      {
        url: "/og-image.png",
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

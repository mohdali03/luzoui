import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font from Google
import "./globals.css";
import Header from "@/components/Header";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify all weights
  variable: "--font-poppins", // Define the variable for use in CSS
  subsets: ["latin"], // Choose the subset for language support
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`} // Use Poppins variable
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

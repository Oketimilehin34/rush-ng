import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "RushNG | Professional Logistics",
  description: "Lagos' Elite Delivery Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-rush-dark">
        {/* The Navbar stays at the top */}
        <Navbar />
        
        {/* Add padding-top (pt-24) so content doesn't get hidden behind the Navbar */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
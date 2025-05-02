import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// Removed GeistMono import as it's not used and causes build issues if not installed
// import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "My Digital Stage",
  description: "Personal website showcasing projects, resume, and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      {/* Removed GeistMono from className as it's no longer imported */}
      {/* <body className="flex min-h-screen flex-col antialiased ${GeistMono.variable}"> */}
       <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

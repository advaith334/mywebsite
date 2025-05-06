import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}> {/* Added dark class */}

       <body className="flex min-h-screen flex-col antialiased">
        <main className="flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

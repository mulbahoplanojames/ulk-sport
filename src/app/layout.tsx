import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/public/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/layout/public/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ULK Sports League",
    template: "%s | ULK Sports League",
  },
  description:
    "Kigali Independent University Sports League Management Platform",
  icons: {
    icon: "/ulk-logo.jpg",
  },
  openGraph: {
    title: "Gallery | ULK Sports League",
    description:
      "Explore the official gallery of ULK Sports League. View photos and videos from matches, events, and memorable moments.",
    // url: "https://your-domain.com/gallery",
    type: "website",
    images: [
      {
        url: "/ulk-logo.jpg",
        width: 1200,
        height: 630,
        alt: "ULK Sports League Gallery",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

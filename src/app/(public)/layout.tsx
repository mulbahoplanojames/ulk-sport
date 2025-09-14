import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/layout/public/navbar";
import Footer from "@/layout/public/footer";

export const metadata: Metadata = {
  title: "ULK Sports League Management System",
  description: "University Sports League Management Platform",
  icons: {
    icon: "/ulk-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` antialiased flex flex-col min-h-screen`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import "../globals.css";

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
  return <main className={` antialiased`}>{children}</main>;
}

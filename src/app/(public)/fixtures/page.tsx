import FixturesClient from "@/components/public/fixture/fixtures-client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { betterAuth } from "better-auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Fixtures",
  description:
    "Stay updated with the latest fixtures for the ULK Sports League. View upcoming football and basketball matches, dates, teams, and venues.",
};

export default async function FixturesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth/login");
  }

  return <FixturesClient />;
}

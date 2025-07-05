import FixturesClient from "@/components/public/fixture/fixtures-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixtures",
  description:
    "Stay updated with the latest fixtures for the ULK Sports League. View upcoming football and basketball matches, dates, teams, and venues.",
};

export default function FixturesPage() {
  return <FixturesClient />;
}

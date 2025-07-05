import CallToAction from "@/components/public/home/call-to-action";
import FeaturedMatches from "@/components/public/home/featured-matches";
import HomeHero from "@/components/public/home/home-hero";
import LeagueTables from "@/components/public/home/league-tables";
import SportCategories from "@/components/public/home/sports-categories";
import StatsSection from "@/components/public/home/stats-section";
import UpcomingEvents from "@/components/public/home/upcoming-events";

export default function Homepage() {
  return (
    <section className="space-y-14">
      <HomeHero />
      <StatsSection />
      <FeaturedMatches />
      <LeagueTables />
      <UpcomingEvents />
      <SportCategories />
      <CallToAction />
    </section>
  );
}

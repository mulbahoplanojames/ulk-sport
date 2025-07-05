import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-400 via-blue-400 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:py-24 py-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ULK Sports League
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Connecting students through sports across departments and countries.
            Experience the thrill of inter-departmental and international
            competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Live Matches
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/leaderboard">
                View Leaderboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

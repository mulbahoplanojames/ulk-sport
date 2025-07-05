import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { featuredMatches } from "@/data/matches";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedMatches() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Featured Country Matches</h2>
        <p className="text-muted-foreground">
          Don&apos;t miss these exciting upcoming and live matches
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredMatches.map((match) => (
          <Card key={match.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    match.status === "Live" ? "destructive" : "secondary"
                  }
                >
                  {match.status}
                </Badge>
                <Badge variant="outline">{match.league}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={match.team1Logo || "/placeholder.svg"}
                    alt={match.team1}
                    width={60}
                    height={60}
                  />
                  <span className="font-semibold text-sm">{match.team1}</span>
                </div>
                <div className="text-xl font-bold">{match.score}</div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-sm">{match.team2}</span>
                  <Image
                    src={match.team2Logo || "/placeholder.svg"}
                    alt={match.team2}
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {match.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {match.venue}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild>
          <Link href="/fixtures">View All Fixtures</Link>
        </Button>
      </div>
    </section>
  );
}

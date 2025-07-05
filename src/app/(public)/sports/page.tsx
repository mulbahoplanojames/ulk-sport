import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Users, Calendar, Target, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sportsData } from "@/data/sports-data";
import Hero from "@/components/public/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Categories | ULK Sports League",
  description:
    "Discover all the exciting sports competitions at ULK. Explore football, basketball, volleyball, tennis, and more. See teams, rules, and stats for each sport.",
};

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        label="Sports Categories"
        description="Discover all the exciting sports competitions happening at ULK. From
            football to tennis, every sport brings together the best talents
            from different departments."
      />

      {/* Sports Overview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="football" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="football">Football</TabsTrigger>
            <TabsTrigger value="basketball">Basketball</TabsTrigger>
            <TabsTrigger value="volleyball">Volleyball</TabsTrigger>
            <TabsTrigger value="tennis">Tennis</TabsTrigger>
          </TabsList>

          {Object.entries(sportsData).map(([key, sport]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              {/* Sport Header */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{sport.name}</h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {sport.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">{sport.teams} Teams</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">
                        {sport.players} Players
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold">
                        {sport.matches} Matches
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold">{sport.season}</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href={`/fixtures?sport=${key}`}>View Fixtures</Link>
                  </Button>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Rules and Teams */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Rules */}
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Game Rules</span>
                    </CardTitle>
                    <CardDescription>
                      Key rules and regulations for {sport.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {sport.rules.map((rule, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Teams */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Participating Teams</span>
                    </CardTitle>
                    <CardDescription>
                      Teams competing in {sport.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sport.teams_list.map((team, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 border rounded-lg"
                        >
                          <div>
                            <div className="font-semibold">{team.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {team.department}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">
                              <Badge variant="outline" className="mr-1">
                                {team.wins}W
                              </Badge>
                              <Badge variant="secondary">{team.losses}L</Badge>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {team.players} players
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join your department team or create a new one. Registration is
              open for all sports categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Register Now</Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fixtures">View Rankings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

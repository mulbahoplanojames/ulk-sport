"use client";

import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Play,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { fixtures } from "@/data/fixtures";
import { results } from "@/data/results";
import Hero from "../hero";
import { Fixture } from "@/type/types";

export default function FixturesClient() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedLeague, setSelectedLeague] = useState("all");

  const filteredFixtures = fixtures.filter((fixture: Fixture) => {
    const sportMatch =
      selectedSport === "all" || fixture.sport.toLowerCase() === selectedSport;
    const leagueMatch =
      selectedLeague === "all" ||
      fixture.league.toLowerCase().includes(selectedLeague);
    return sportMatch && leagueMatch;
  });

  const filteredResults = results.filter((result) => {
    const sportMatch =
      selectedSport === "all" || result.sport.toLowerCase() === selectedSport;
    const leagueMatch =
      selectedLeague === "all" ||
      result.league.toLowerCase().includes(selectedLeague);
    return sportMatch && leagueMatch;
  });

  return (
    <>
      <Hero
        label="Fixtures & Result"
        description="Stay updated with upcoming matches and recent results from all sports categories. Never miss a game with
              our comprehensive fixture list."
      />

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Filter Matches</CardTitle>
            <CardDescription>
              Filter by sport and league to find specific matches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select Sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="volleyball">Volleyball</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select League" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Leagues</SelectItem>
                  <SelectItem value="departmental">
                    Inter-Departmental
                  </SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Fixtures and Results */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs defaultValue="fixtures" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="fixtures">Upcoming Fixtures</TabsTrigger>
            <TabsTrigger value="results">Recent Results</TabsTrigger>
          </TabsList>

          <TabsContent value="fixtures" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Upcoming Matches</h2>
              <p className="text-muted-foreground">
                Don&apos;t miss these exciting upcoming matches across all
                sports
              </p>
            </div>

            <div className="space-y-4">
              {filteredFixtures.map((fixture: Fixture) => (
                <Card key={fixture.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Match Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline">{fixture.sport}</Badge>
                          <Badge variant="secondary">{fixture.league}</Badge>
                          {fixture.status === "live" && (
                            <Badge
                              variant="destructive"
                              className="animate-pulse"
                            >
                              <Play className="w-3 h-3 mr-1" />
                              LIVE
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center md:flex-row flex-col gap-y-3 space-x-3">
                            <div className="relative w-16 h-8 overflow-hidden">
                              <Image
                                src={fixture.team1Logo || "/placeholder.svg"}
                                alt={fixture.team1}
                                fill
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="font-semibold text-lg">
                              {fixture.team1}
                            </span>
                          </div>

                          <div className="text-center px-4">
                            {fixture?.status === "live" ? (
                              <div className="text-2xl font-bold text-red-600">
                                {fixture?.score}
                              </div>
                            ) : (
                              <div className="text-2xl font-bold text-muted-foreground">
                                VS
                              </div>
                            )}
                          </div>

                          <div className="flex items-center  md:flex-row flex-col gap-y-3  space-x-3">
                            <span className="font-semibold text-lg md:order-1 order-2 md:pl-3 pl-0">
                              {fixture.team2}
                            </span>
                            <div className="relative w-16 h-8 overflow-hidden">
                              <Image
                                src={fixture.team2Logo || "/placeholder.svg"}
                                alt={fixture.team2}
                                fill
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{fixture.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{fixture.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{fixture.venue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex flex-col gap-2">
                        {fixture.status === "live" ? (
                          <Button className="bg-red-600 hover:bg-red-700">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Live
                          </Button>
                        ) : (
                          <Button variant="outline">Share Fixture</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Recent Results</h2>
              <p className="text-muted-foreground">
                Check out the latest match results and highlights
              </p>
            </div>

            <div className="space-y-4">
              {filteredResults.map((result) => (
                <Card key={result.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Match Result */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{result.sport}</Badge>
                          <Badge variant="secondary">{result.league}</Badge>
                          <Badge variant="default" className="bg-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            COMPLETED
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={result.team1Logo || "/placeholder.svg"}
                              alt={result.team1}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <span className="font-semibold text-lg">
                              {result.team1}
                            </span>
                          </div>

                          <div className="text-center px-4">
                            <div className="text-2xl font-bold">
                              {result.score}
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="font-semibold text-lg">
                              {result.team2}
                            </span>
                            <Image
                              src={result.team2Logo || "/placeholder.svg"}
                              alt={result.team2}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{result.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{result.venue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Match Highlights */}
                      <div className="lg:w-80">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Trophy className="w-4 h-4 mr-2" />
                          Match Highlights
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {result.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-3 w-full bg-transparent"
                        >
                          View Full Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}

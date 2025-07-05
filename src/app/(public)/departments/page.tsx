import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Globe,
  Users,
  Trophy,
  Medal,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Hero from "@/components/public/hero";
import { countries, departments } from "@/data/departments-page-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments & Countries",
  description:
    "Discover the academic departments and international countries represented in the ULK Sports League. Explore stats, achievements, and the global diversity of our league.",
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        label="Departments & Countries"
        description="Explore the diverse academic departments and international
              representation that makes ULK Sports League truly global and
              competitive."
      />

      {/* Overview Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{departments.length}</div>
              <div className="text-sm text-muted-foreground">Departments</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{countries.length}</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">10,000</div>
              <div className="text-sm text-muted-foreground">
                Total Students
              </div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Trophy className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-muted-foreground">Active Teams</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="departments" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="departments">Academic Departments</TabsTrigger>
            <TabsTrigger value="countries">Countries</TabsTrigger>
          </TabsList>

          <TabsContent value="departments" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Academic Departments</h2>
              <p className="text-muted-foreground">
                Each department brings unique strengths and competitive spirit
                to the league
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow p-0"
                >
                  <div className="relative h-48">
                    <Image
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{dept.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {dept.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {dept.students}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Students
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {dept.teams}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Teams
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {dept.wins}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Wins
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Sports:</div>
                      <div className="flex flex-wrap gap-1">
                        {dept.sports.map((sport, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {sport}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">
                        Achievements:
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {dept.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Medal className="h-3 w-3 text-yellow-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-transparent" variant="outline">
                      View Department Teams
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="countries" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                International Representation
              </h2>
              <p className="text-muted-foreground">
                Students from across East Africa compete in the ULK Sports
                League
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {countries.map((country, index) => (
                <Card key={index} className="overflow-hidden p-0">
                  <div className="relative h-64">
                    <Image
                      src={country.image || "/placeholder.svg"}
                      alt={country.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="font-bold text-2xl">{country.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {country.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                          {country.students}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Students
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">
                          {country.teams}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Teams
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600">
                          {country.wins}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Wins
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-semibold mb-2">
                        Top Sports:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {country.topSports.map((sport, i) => (
                          <Badge key={i} variant="secondary">
                            {sport}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-semibold mb-2">
                        Major Achievements:
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {country.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <TrendingUp className="h-3 w-3 text-green-500" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full">View Country Teams</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}

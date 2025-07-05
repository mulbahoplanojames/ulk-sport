import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const sportsCategories = [
  {
    name: "Football",
    teams: 8,
    image: "/football.jpg",
    color: "bg-green-500",
  },
  {
    name: "Basketball",
    teams: 6,
    image: "/basketball.jpg",
    color: "bg-orange-500",
  },
  {
    name: "Volleyball",
    teams: 6,
    image: "/volleyball.jpg",
    color: "bg-blue-500",
  },
  {
    name: "Tennis",
    teams: 4,
    image: "/tennis.jpg",
    color: "bg-purple-500",
  },
];

export default function SportCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Sports Categories</h2>
        <p className="text-muted-foreground">
          Explore different sports and their participating teams
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sportsCategories.map((sport, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer p-0"
          >
            <div className="relative h-48">
              <Image
                src={sport.image || "/placeholder.svg"}
                alt={sport.name}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 ${sport.color} opacity-40`}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{sport.name}</h3>
              </div>
            </div>
            <CardContent className="p-4 pt-0">
              <div className="text-center">
                <div className="text-2xl font-bold">{sport.teams}</div>
                <div className="text-sm text-muted-foreground">
                  Active Teams
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild>
          <Link href="/sports">Explore All Sports</Link>
        </Button>
      </div>
    </section>
  );
}

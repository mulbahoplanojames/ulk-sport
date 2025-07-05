import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Trophy, Users } from "lucide-react";

const stats = [
  { label: "Active Teams", value: "8", icon: Trophy },
  { label: "Registered Players", value: "68", icon: Users },
  { label: "Matches Played", value: "24", icon: Calendar },
  { label: "Goals Scored", value: "76", icon: TrendingUp },
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center p-0">
            <CardContent className="py-4">
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

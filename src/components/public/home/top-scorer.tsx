import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target } from "lucide-react";
import { topScorers } from "@/data/top-scorer";

export default function TopScorers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-orange-600" />
          <span>Top Scorers</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topScorers.map((player, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-muted-foreground w-8">
                  {index + 1}
                </div>
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={player.photo || "/placeholder.svg"}
                    alt={player.name}
                  />
                  <AvatarFallback>
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{player.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {player.team}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {player.goals}
                </div>
                <div className="text-sm text-muted-foreground">Goals</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

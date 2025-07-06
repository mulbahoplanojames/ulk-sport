import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { internationalBasketballLeague } from "@/data/international-basketball-league-table";

export default function InternationalBasketballLeagueTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-orange-600" />
          <span>International Basketball League</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-center">P</TableHead>
              <TableHead className="text-center">W</TableHead>
              <TableHead className="text-center">WP</TableHead>
              <TableHead className="text-center">L</TableHead>
              <TableHead className="text-center">PF</TableHead>
              <TableHead className="text-center">PA</TableHead>
              <TableHead className="text-center">PD</TableHead>
              <TableHead className="text-center">Pts</TableHead>
              <TableHead>Form</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...internationalBasketballLeague]
              .sort((a, b) =>
                b.totalPoints !== a.totalPoints
                  ? b.totalPoints - a.totalPoints
                  : a.position - b.position
              )
              .map((team, index) => (
                <TableRow key={team.position}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-semibold">{team.team}</div>
                      <div className="text-sm text-muted-foreground">
                        {team.country}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {team.gamesPlayed}
                  </TableCell>
                  <TableCell className="text-center">{team.wins}</TableCell>
                  <TableCell className="text-center">
                    {team.winPercentage}
                  </TableCell>
                  <TableCell className="text-center">{team.losses}</TableCell>
                  <TableCell className="text-center">
                    {team.pointsFor}
                  </TableCell>
                  <TableCell className="text-center">
                    {team.pointsAgainst}
                  </TableCell>
                  <TableCell className="text-center">
                    {team.pointDifference > 0 ? "+" : ""}
                    {team.pointDifference}
                  </TableCell>
                  <TableCell className="text-center font-bold">
                    {team.totalPoints}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      {team.form.map((result: string, idx: number) => (
                        <Badge
                          key={idx}
                          variant={
                            result === "W"
                              ? "default"
                              : result === "D"
                              ? "secondary"
                              : "destructive"
                          }
                          className="w-6 h-6 p-0 text-xs"
                        >
                          {result}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

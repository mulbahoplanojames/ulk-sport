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
import { interDepartmentalLeague } from "@/data/departmental-league-table";

export default function InterDepartmentalLeagueTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-blue-600" />
          <span>Inter-Departmental League</span>
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
              <TableHead className="text-center">D</TableHead>
              <TableHead className="text-center">L</TableHead>
              <TableHead className="text-center">GF</TableHead>
              <TableHead className="text-center">GA</TableHead>
              <TableHead className="text-center">GD</TableHead>
              <TableHead className="text-center">Pts</TableHead>
              <TableHead>Form</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interDepartmentalLeague.map((team) => (
              <TableRow key={team.position}>
                <TableCell className="font-medium">{team.position}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-semibold">{team.team}</div>
                    <div className="text-sm text-muted-foreground">
                      {team.department}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">{team.played}</TableCell>
                <TableCell className="text-center">{team.won}</TableCell>
                <TableCell className="text-center">{team.drawn}</TableCell>
                <TableCell className="text-center">{team.lost}</TableCell>
                <TableCell className="text-center">{team.gf}</TableCell>
                <TableCell className="text-center">{team.ga}</TableCell>
                <TableCell className="text-center">
                  {team.gd > 0 ? "+" : ""}
                  {team.gd}
                </TableCell>
                <TableCell className="text-center font-bold">
                  {team.points}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    {team.form.map((result, index) => (
                      <Badge
                        key={index}
                        variant={
                          result === "W"
                            ? "default"
                            : result === "D"
                            ? "secondary"
                            : "destructive"
                        }
                        className="w-6 h-6 p-0 text-xs flex items-center justify-center"
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

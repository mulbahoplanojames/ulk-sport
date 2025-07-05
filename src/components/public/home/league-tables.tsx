import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InterDepartmentalLeagueTable from "./inter-departmental-league-table";
import InternationalLeagueTable from "./international-league-table";
import TopScorers from "./top-scorer";

export default function LeagueTables() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">League Standings</h2>
        <p className="text-muted-foreground">
          Current standings across all competitions
        </p>
      </div>

      <Tabs defaultValue="international" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="international">International</TabsTrigger>
          <TabsTrigger value="inter-departmental">
            Inter-Departmental
          </TabsTrigger>
          <TabsTrigger value="top-scorers">Top Scorers</TabsTrigger>
        </TabsList>
        <TabsContent value="international">
          <InternationalLeagueTable />
        </TabsContent>

        <TabsContent value="inter-departmental">
          <InterDepartmentalLeagueTable />
        </TabsContent>

        <TabsContent value="top-scorers">
          <TopScorers />
        </TabsContent>
      </Tabs>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Competition</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to represent your department or country? Register now and be
            part of the most exciting sports league at ULK. Show your skills and
            compete for glory!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Register as Player</Button>
            <Button size="lg" variant="outline">
              Create Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

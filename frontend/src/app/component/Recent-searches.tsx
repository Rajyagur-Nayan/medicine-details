// src/components/sections/recent-searches.tsx
import { Button } from "@/components/ui/button";

export function RecentSearches() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/70 py-4 px-4 lg:px-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-700 dark:text-white">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Last searches:</span>
            <span>Aspirin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Date:</span>
            <span>08/01/2022</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Results:</span>
            <span>2 founds</span>
          </div>
        </div>
        <Button
          variant="secondary"
          className="bg-blue-100  text-blue-700 hover:bg-blue-200 px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300"
        >
          Search
        </Button>
      </div>
    </section>
  );
}

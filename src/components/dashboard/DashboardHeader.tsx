import { Search, Filter, Grid3X3, List, MoreHorizontal, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardHeader() {
  return (
    <div className="border-b border-border bg-background">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search everywhere" 
              className="pl-10 w-64 bg-muted border-border"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="text-xs text-muted-foreground bg-border px-1 py-0.5 rounded">
                Ctrl+K
              </kbd>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <SortAsc className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <List className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
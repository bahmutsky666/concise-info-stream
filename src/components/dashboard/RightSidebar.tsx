import { Plus, Link, FolderPlus, FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RightSidebar() {
  return (
    <div className="w-80 bg-background border-l border-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-foreground">Stacks dashboard</h2>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Here you will find all links from your selected workspace all at one place. This is also the home for all your pinned links so that you can access them instantly.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-border">
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center justify-between">
          QUICK ACTIONS
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <Plus className="w-3 h-3" />
          </Button>
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">New quick link</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              Ctrl+Shift+L
            </kbd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Manage quick links</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              ⌘L
            </kbd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">New link</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              C
            </kbd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">New collection</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              ⌘C
            </kbd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Upload files</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              Ctrl+U
            </kbd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">New page</span>
            <kbd className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              P
            </kbd>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex-1 p-4">
        <h3 className="text-sm font-medium text-foreground mb-3 flex items-center justify-between">
          QUICK LINKS
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <Plus className="w-3 h-3" />
          </Button>
        </h3>
        
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <Plus className="w-8 h-8 text-muted-foreground" />
          </div>
          <h4 className="font-medium text-foreground mb-2">No quick links</h4>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Quick links will appear here as you create them
          </p>
        </div>
      </div>
    </div>
  );
}
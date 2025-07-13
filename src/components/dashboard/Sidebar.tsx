import { 
  Home, 
  BookOpen, 
  FolderOpen, 
  FileText, 
  Zap, 
  Bot, 
  RotateCcw, 
  Search, 
  BarChart3,
  Star,
  Image,
  FileImage,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "Home", isActive: true },
  { icon: BookOpen, label: "Resources", hasSubmenu: true },
  { icon: FileText, label: "Inbox" },
  { icon: FolderOpen, label: "Collections" },
  { icon: FileImage, label: "Pages" },
  { icon: Zap, label: "Quick Notes" },
];

const aiToolsItems = [
  { icon: Bot, label: "Stacks AI" },
  { icon: RotateCcw, label: "Recall" },
  { icon: Search, label: "Integrated Search" },
  { icon: BarChart3, label: "Analytics" },
];

const smartCollections = [
  { icon: FileText, label: "Articles" },
  { icon: Image, label: "Media" },
  { icon: FileImage, label: "Documents" },
  { icon: Star, label: "Places" },
  { icon: MoreHorizontal, label: "More" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-sidebar border-r border-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">No workspace selected</p>
            <p className="text-xs text-muted-foreground">Select a workspace</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200",
                item.isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "text-muted-foreground hover:text-foreground hover:bg-hover-accent"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              {item.hasSubmenu && (
                <div className="ml-auto">
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Favourites */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Favourites
          </h3>
          <div className="space-y-1">
            {/* Empty state for favourites */}
            <p className="text-xs text-muted-foreground px-3 py-2">
              No favourites yet
            </p>
          </div>
        </div>

        {/* AI and Tools */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            AI and Tools
          </h3>
          <div className="space-y-1">
            {aiToolsItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer text-muted-foreground hover:text-foreground hover:bg-hover-accent transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Collections */}
        <div>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Smart Collections
          </h3>
          <div className="space-y-1">
            {smartCollections.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer text-muted-foreground hover:text-foreground hover:bg-hover-accent transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
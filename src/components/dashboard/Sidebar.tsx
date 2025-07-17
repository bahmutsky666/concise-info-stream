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
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Settings,
  Eye,
  EyeOff
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebarStore";
import { Button } from "@/components/ui/button";
import { SidebarCustomizer } from "./SidebarCustomizer";
import { useState } from "react";

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
  const {
    isCollapsed,
    showResources,
    showFavourites,
    showAITools,
    showSmartCollections,
    sidebarWidth,
    compactMode,
    colorTheme,
    customColor,
    toggleCollapse
  } = useSidebarStore();
  
  const [showCustomizer, setShowCustomizer] = useState(false);

  const getItemClasses = (isActive?: boolean) => cn(
    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200",
    compactMode ? "py-1.5" : "py-2",
    isActive 
      ? "bg-primary text-primary-foreground shadow-glow" 
      : "text-muted-foreground hover:text-foreground hover:bg-hover-accent"
  );

  const sectionHeaderClasses = cn(
    "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 flex items-center justify-between",
    compactMode ? "mb-1" : "mb-2"
  );

  const getSidebarBackground = () => {
    switch (colorTheme) {
      case 'purple':
        return 'bg-sidebar-theme-purple';
      case 'green':
        return 'bg-sidebar-theme-green';
      case 'orange':
        return 'bg-sidebar-theme-orange';
      case 'red':
        return 'bg-sidebar-theme-red';
      case 'custom':
        return customColor ? '' : 'bg-sidebar';
      default:
        return 'bg-sidebar';
    }
  };

  return (
    <>
      <div 
        className={cn(
          "border-r border-border h-screen flex flex-col transition-all duration-300 relative",
          getSidebarBackground(),
          isCollapsed ? "w-16" : `w-[${sidebarWidth}px]`
        )}
        style={{ 
          width: isCollapsed ? '64px' : `${sidebarWidth}px`,
          backgroundColor: colorTheme === 'custom' && customColor ? customColor : undefined
        }}
      >
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground truncate">No workspace selected</p>
                <p className="text-xs text-muted-foreground truncate">Select a workspace</p>
              </div>
            )}
          </div>
        </div>

        {/* Collapse Toggle */}
        <div className="absolute -right-3 top-20 z-10">
          <Button
            variant="secondary"
            size="sm"
            className="h-6 w-6 p-0 rounded-full border shadow-sm"
            onClick={toggleCollapse}
          >
            {isCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
          </Button>
        </div>

        {/* Settings Button */}
        {!isCollapsed && (
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setShowCustomizer(true)}
            >
              <Settings className="w-3 h-3" />
            </Button>
          </div>
        )}

        {/* Navigation */}
        <div className={cn("flex-1 p-4 space-y-6 overflow-y-auto", compactMode && "space-y-4")}>
          {/* Main Navigation */}
          {showResources && (
            <div className="space-y-1">
              {!isCollapsed && (
                <div className={sectionHeaderClasses}>
                  <span>Navigation</span>
                </div>
              )}
              {navigationItems.map((item) => (
                <div key={item.label} className={getItemClasses(item.isActive)}>
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="truncate">{item.label}</span>
                      {item.hasSubmenu && (
                        <div className="ml-auto">
                          <div className="w-1 h-1 bg-current rounded-full"></div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Favourites */}
          {showFavourites && (
            <div>
              {!isCollapsed && (
                <h3 className={sectionHeaderClasses}>
                  <span>Favourites</span>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                    <Star className="w-3 h-3" />
                  </Button>
                </h3>
              )}
              <div className="space-y-1">
                {isCollapsed ? (
                  <div className="flex justify-center py-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground px-3 py-2">
                    No favourites yet
                  </p>
                )}
              </div>
            </div>
          )}

          {/* AI and Tools */}
          {showAITools && (
            <div>
              {!isCollapsed && (
                <h3 className={sectionHeaderClasses}>
                  <span>AI and Tools</span>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                    <Bot className="w-3 h-3" />
                  </Button>
                </h3>
              )}
              <div className="space-y-1">
                {aiToolsItems.map((item) => (
                  <div key={item.label} className={getItemClasses()}>
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Smart Collections */}
          {showSmartCollections && (
            <div>
              {!isCollapsed && (
                <h3 className={sectionHeaderClasses}>
                  <span>Smart Collections</span>
                  <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                    <FolderOpen className="w-3 h-3" />
                  </Button>
                </h3>
              )}
              <div className="space-y-1">
                {smartCollections.map((item) => (
                  <div key={item.label} className={getItemClasses()}>
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Customizer Panel */}
      <SidebarCustomizer 
        open={showCustomizer} 
        onClose={() => setShowCustomizer(false)} 
      />
    </>
  );
}
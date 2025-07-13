import { X, RotateCcw, Palette, Layout, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useSidebarStore } from "@/stores/sidebarStore";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface SidebarCustomizerProps {
  open: boolean;
  onClose: () => void;
}

export function SidebarCustomizer({ open, onClose }: SidebarCustomizerProps) {
  const {
    showResources,
    showFavourites,
    showAITools,
    showSmartCollections,
    sidebarWidth,
    compactMode,
    toggleSection,
    setSidebarWidth,
    toggleCompactMode,
    resetToDefaults
  } = useSidebarStore();

  const handleWidthChange = (value: number[]) => {
    setSidebarWidth(value[0]);
  };

  const sections = [
    { key: 'showResources' as const, label: 'Navigation Section', description: 'Show main navigation items' },
    { key: 'showFavourites' as const, label: 'Favourites Section', description: 'Show favourites and bookmarks' },
    { key: 'showAITools' as const, label: 'AI Tools Section', description: 'Show AI and automation tools' },
    { key: 'showSmartCollections' as const, label: 'Smart Collections', description: 'Show smart collections and filters' },
  ];

  const sectionValues = { showResources, showFavourites, showAITools, showSmartCollections };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-96 sm:max-w-96">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Layout className="w-5 h-5" />
            Sidebar Customization
          </SheetTitle>
          <SheetDescription>
            Customize your sidebar layout, sections, and appearance to match your workflow.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Appearance Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Palette className="w-4 h-4" />
              Appearance
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm">Compact Mode</Label>
                <p className="text-xs text-muted-foreground">Reduce spacing and padding</p>
              </div>
              <Switch checked={compactMode} onCheckedChange={toggleCompactMode} />
            </div>
          </div>

          {/* Size Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sliders className="w-4 h-4" />
              Size Settings
            </div>
            
            <div className="space-y-3">
              <Label className="text-sm">Sidebar Width: {sidebarWidth}px</Label>
              <Slider
                value={[sidebarWidth]}
                onValueChange={handleWidthChange}
                min={200}
                max={400}
                step={16}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>200px</span>
                <span>400px</span>
              </div>
            </div>
          </div>

          {/* Section Visibility */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Layout className="w-4 h-4" />
              Section Visibility
            </div>
            
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.key} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">{section.label}</Label>
                    <p className="text-xs text-muted-foreground">{section.description}</p>
                  </div>
                  <Switch 
                    checked={sectionValues[section.key]} 
                    onCheckedChange={() => toggleSection(section.key)} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Presets */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <RotateCcw className="w-4 h-4" />
              Quick Actions
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setSidebarWidth(200);
                  toggleCompactMode();
                }}
                className="text-xs"
              >
                Minimal
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setSidebarWidth(320);
                }}
                className="text-xs"
              >
                Comfortable
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setSidebarWidth(400);
                }}
                className="text-xs"
              >
                Spacious
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetToDefaults}
                className="text-xs"
              >
                Reset
              </Button>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-medium">💡 Pro Tips</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Use the collapse button to quickly hide/show the sidebar</li>
              <li>• Compact mode is great for smaller screens</li>
              <li>• Disable unused sections to reduce clutter</li>
              <li>• Settings are automatically saved</li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarSettings {
  isCollapsed: boolean;
  showResources: boolean;
  showFavourites: boolean;
  showAITools: boolean;
  showSmartCollections: boolean;
  sidebarWidth: number;
  compactMode: boolean;
  colorTheme: 'default' | 'purple' | 'green' | 'orange' | 'red' | 'custom';
  customColor?: string;
}

interface SidebarStore extends SidebarSettings {
  toggleCollapse: () => void;
  toggleSection: (section: keyof Omit<SidebarSettings, 'isCollapsed' | 'sidebarWidth' | 'compactMode' | 'colorTheme' | 'customColor'>) => void;
  setSidebarWidth: (width: number) => void;
  toggleCompactMode: () => void;
  setColorTheme: (theme: SidebarSettings['colorTheme']) => void;
  setCustomColor: (color: string) => void;
  resetToDefaults: () => void;
}

const defaultSettings: SidebarSettings = {
  isCollapsed: false,
  showResources: true,
  showFavourites: true,
  showAITools: true,
  showSmartCollections: true,
  sidebarWidth: 256,
  compactMode: false,
  colorTheme: 'default',
  customColor: undefined,
};

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      ...defaultSettings,
      toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
      toggleSection: (section) => set((state) => ({ [section]: !state[section] })),
      setSidebarWidth: (width) => set({ sidebarWidth: width }),
      toggleCompactMode: () => set((state) => ({ compactMode: !state.compactMode })),
      setColorTheme: (theme) => set({ colorTheme: theme }),
      setCustomColor: (color) => set({ customColor: color }),
      resetToDefaults: () => set(defaultSettings),
    }),
    {
      name: 'sidebar-settings',
    }
  )
);
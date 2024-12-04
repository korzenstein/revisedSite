import {create} from "zustand";

type NavigationState = {
  isNavOpen: boolean;
  currentSection: string;
  toggleNav: () => void;
  setCurrentSection: (section: string) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  isNavOpen: false,
  currentSection: "home",
  toggleNav: () =>
    set((state) => ({
      isNavOpen: !state.isNavOpen,
    })),
  setCurrentSection: (section) => set({ currentSection: section }),
}));

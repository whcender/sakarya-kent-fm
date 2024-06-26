import { create } from "zustand";

interface GenerationState {
    theme: boolean;
    setTheme: (theme: boolean) => void;
    showMenu: boolean;
    setShowMenu: (showMenu: boolean) => void;
    value: string;
    setValue: (value: string) => void;
}

export const useGenerationStore = create<GenerationState>()((set) => ({
    theme: true,
    setTheme: (theme) => set({ theme }),
    showMenu: false,
    setShowMenu: (showMenu) => set({ showMenu }),
    value: '',
    setValue: (value) => set({ value }),
}));
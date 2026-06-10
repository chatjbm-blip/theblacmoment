import { create } from "zustand";

export type PageId = "home" | "stream" | "host" | "channels" | "contact" | "gallery";

interface PageState {
  currentPage: PageId;
  setPage: (page: PageId) => void;
}

export const usePageStore = create<PageState>((set) => ({
  currentPage: "home",
  setPage: (page) => set({ currentPage: page }),
}));

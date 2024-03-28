import { create } from "zustand";

interface SearchStore {
  searchList: String[];
  setSearchList: (select: String[]) => void;
}

const useSearch = create<SearchStore>((set) => ({
  searchList: [],
  setSearchList: (select) => {
    set((state) => ({ ...state, searchList: select }));
  },
}));

export default useSearch;

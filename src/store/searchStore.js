import { create } from "zustand";

const searchStore = create((set) => ({
    searchValue: "",
    searchValueChange: (payload) => set((state) => ({ searchValue: payload })),

}));

export default searchStore
import { create } from "zustand";

const searchStore = create((set) => ({
    searchValue: "",
    searchValueChange: (payload) => set((state) => ({ searchValue: payload })),
    selectedSong: false,
    setSelectedSong: (payload) => set((state) => ({ selectedSong: payload })),


}));

export default searchStore
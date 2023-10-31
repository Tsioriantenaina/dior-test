import { create } from "zustand";

interface PreviewDropDown {
	isOpen: boolean;
	toggleOpen: () => void;
}
const useFilterDropdown = create<PreviewDropDown>((set) => ({
	isOpen: false,
	toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useFilterDropdown;

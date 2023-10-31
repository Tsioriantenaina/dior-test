import { create } from "zustand";

interface PreviewDropDown {
	isOpen: boolean;
	toggleOpen: () => void;
}
const useSortDropdown = create<PreviewDropDown>((set) => ({
	isOpen: false,
	toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSortDropdown;

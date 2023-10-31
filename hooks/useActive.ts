import { create } from "zustand";

interface ActivateType {
	pathName: string;
	isActive: boolean;
	onActive: (label: string) => void;
}
const useActive = create<ActivateType>((set) => ({
	pathName: "/",
	isActive: false,
	onActive: (label) => {
		set((state) => ({ isActive: !state.isActive, pathName: label }));
	},
}));

export default useActive;

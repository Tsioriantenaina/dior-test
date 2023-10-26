import { ProductType } from "@/types";
import { create } from "zustand";

interface PreviewModal {
	isOpen: boolean;
	data?: ProductType[];
	onOpen: () => void;
	onClose: () => void;
}
const usePreviewModal = create<PreviewModal>((set) => ({
	isOpen: false,
	data: undefined,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;

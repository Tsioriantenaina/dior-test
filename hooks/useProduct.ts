import { data } from "@/data";
import { ProductType } from "@/types";
import { create } from "zustand";

interface Products {
	products: ProductType[];
	// initProduct: () => void;
}
const useProduct = create<Products>((set) => ({
	products: [...data],
	// initProduct: () => set({ products: data }),
}));

export default useProduct;

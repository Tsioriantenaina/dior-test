import { create } from "zustand";

import { ProductType } from "@/types";
interface Products {
	products: ProductType[];
	addProduct: (data: ProductType[]) => void;
}

const useProduct = create<Products>((set) => ({
	products: [],
	addProduct: (data: ProductType[]) => set({ products: data }),
}));

export default useProduct;

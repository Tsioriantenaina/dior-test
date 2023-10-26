import { data } from "@/data";
import { ProductType } from "@/types";

export const getProducts = () => {
	const products: ProductType[] = data;
	return products;
};

// export const getProduct = (id: number) => {
// 	const product: ProductType = data.find((prod) => prod.id === id);
// 	return product;
// };

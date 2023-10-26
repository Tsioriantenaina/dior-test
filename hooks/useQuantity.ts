import { useState } from "react";

import useCart from "./useCart";
import { formatPrice } from "@/utility/utility";
import { ProductType } from "@/types";
import useProduct from "./useProduct";

interface IUseQuantity {
	quantity: number;
	onPlus: () => void;
	onMinus: () => void;
	handleRemoveItem: () => void;
}

const useQuantity = (cartData: ProductType): IUseQuantity => {
	const [quantity, setQuantity] = useState(cartData.quantity);
	const cart = useCart();
	const { products } = useProduct();

	const handleRemoveItem = () => {
		cart.removeItem(cartData.id);
	};

	const onPlus = () => {
		const product = products.find((product) => product.id === cartData.id);
		if (product) {
			cart.incrementQuantity(cartData, formatPrice(product?.price));
		}
		setQuantity(quantity + 1);
	};

	const onMinus = () => {
		if (quantity <= 1) {
			return;
		}

		const product = products.find((product) => product.id === cartData.id);
		if (product) {
			cart.decrementQuantity(cartData, formatPrice(product.price));
		}

		setQuantity(quantity - 1);
	};

	return {
		quantity,
		onPlus,
		onMinus,
		handleRemoveItem,
	};
};

export default useQuantity;

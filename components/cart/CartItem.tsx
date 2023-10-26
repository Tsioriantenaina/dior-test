"use client";

import Image from "next/image";

import { ProductType } from "@/types";
import ProductInCart from "./ProductInCart";
interface CartItemProps {
	cartData: ProductType;
}

const CartItem: React.FC<CartItemProps> = ({ cartData }) => {
	return (
		<div className="cartModal_item">
			<div className="cartModal_item-image">
				<Image
					alt={cartData.name}
					src={cartData.image}
					fill
				/>
			</div>
			<ProductInCart cartData={cartData} />
		</div>
	);
};

export default CartItem;

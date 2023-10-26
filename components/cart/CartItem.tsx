"use client";

import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import { ProductType } from "@/types";
import { formatPrice } from "@/utility/utility";
import Image from "next/image";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line, RiH3 } from "react-icons/ri";
interface CartItemProps {
	cartData: ProductType;
}

const CartItem: React.FC<CartItemProps> = ({ cartData }) => {
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

	return (
		<div className="cartModal_item">
			<div className="cartModal_item-image">
				<Image
					alt={cartData.name}
					src={cartData.image}
					fill
				/>
			</div>
			<div className="cartModal_item-content productCart">
				<p className="productCart_category">{cartData.category}</p>
				<p className="productCart_price">{cartData.price} €</p>
				<div className="productCart_quantity">
					<div
						className="icon"
						onClick={onMinus}
					>
						<CiCircleMinus size={32} />
					</div>
					<div className="productCart_quantity-text">
						<span>{quantity}</span> <span>ITEM{quantity > 1 ? "S" : ""}</span>
					</div>
					<div
						className="icon"
						onClick={onPlus}
					>
						<CiCirclePlus size={32} />
					</div>
				</div>
				<div
					className="removeIcon"
					onClick={handleRemoveItem}
				>
					<RiDeleteBin6Line size={28} />
				</div>
			</div>
		</div>
	);
};

export default CartItem;

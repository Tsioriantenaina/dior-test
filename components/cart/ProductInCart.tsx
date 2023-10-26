"use client";

import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import useQuantity from "@/hooks/useQuantity";
import { ProductType } from "@/types";

interface ProductInCartProps {
	cartData: ProductType;
}
const ProductInCart: React.FC<ProductInCartProps> = ({ cartData }) => {
	const { quantity, onPlus, onMinus, handleRemoveItem } = useQuantity(cartData);

	return (
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
	);
};

export default ProductInCart;

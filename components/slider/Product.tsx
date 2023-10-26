"use client";
import React, { MouseEventHandler } from "react";
import ProductImage from "./ProductImage";
import Button from "../Button";
import { ProductType } from "@/types";
import useCart from "@/hooks/useCart";

import cartIcon from "../../public/cart.png";
interface ProductProps {
	product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
	const cart = useCart();

	const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		cart.addItem(product);
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="product">
				<ProductImage
					alt={product.name}
					src={product.image}
					className="product_image"
				/>
				<div className="product_right">
					<p className="product_description">{product.description}</p>
					<div className="product_right-bottom">
						<h2 className="product_category">{product.category}</h2>
						<p className="product_price">{product.price} €</p>
					</div>
				</div>
			</div>
			<div className="product_addTocart">
				<Button
					big
					onClick={handleAddToCart}
					disabled={false}
					label="Add to cart"
					icon={cartIcon}
				/>
			</div>
		</div>
	);
};

export default Product;

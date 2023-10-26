"use client";
import useCart from "@/hooks/useCart";
import React from "react";
import CartItem from "./CartItem";
import Button from "../Button";
import { formatPrice } from "@/utility/utility";

const CartList = () => {
	const data = useCart();
	const items = useCart((state) => state.items);

	const totalPrice = items.reduce((total, item) => {
		return total + formatPrice(item.price);
	}, 0);

	if (data.items.length === 0) {
		return (
			<div className="flex w-full h-full justify-center items-center">
				<h3>Cart Empty !</h3>
			</div>
		);
	}

	return (
		<div className="cartModal">
			<div className="cartModal_items">
				{data.items.map((item) => (
					<CartItem
						key={item.id}
						cartData={item}
					/>
				))}
			</div>
			<div className="cartModal_center">
				<div className="cartModal_taxes">
					<span>Taxes</span>
					<span>3 166.67 €</span>
				</div>
				<div className="cartModal_total">
					<span>Total</span>
					<span>{totalPrice} €</span>
				</div>
			</div>
			<div className="chechoutBtn">
				<Button
					label="Go to checkout"
					onClick={() => {}}
					big
				/>
			</div>
		</div>
	);
};

export default CartList;

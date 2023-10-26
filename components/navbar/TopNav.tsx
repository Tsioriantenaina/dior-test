"use client";

import Image from "next/image";
import Item from "./Item";
import logo from "../../public/logo.png";
import cart from "../../public/cart.png";
import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/usePreviewModal";

const TopNav = () => {
	const cartItem = useCart();
	const previewModal = usePreviewModal();

	return (
		<div className="navbar_top">
			<Image
				alt="Dior logo"
				src={logo}
				style={{ width: "auto", height: "43px" }}
				className="logo"
			/>

			<Item
				icon={cart}
				onClick={previewModal.onOpen}
				iconWidth="51px"
				iconHeight="42px"
				className="cart"
				cartCount={cartItem.items.length}
			/>
		</div>
	);
};

export default TopNav;

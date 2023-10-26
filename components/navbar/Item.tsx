"use client";

import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface ItemProps {
	label?: string;
	icon: any;
	onClick: () => void;
	column?: boolean;
	iconWidth?: string;
	iconHeight?: string;
	className?: string;
	cartCount?: number;
}

const Item: React.FC<ItemProps> = ({ label, icon, onClick, column, iconWidth, iconHeight, className, cartCount }) => {
	return (
		<div
			className={`navItem ${column ? "column" : ""} ${className ? className : ""}`}
			onClick={onClick}
		>
			{(cartCount || cartCount !== 0) && <span className="count">{cartCount}</span>}
			<Image
				alt="icon"
				src={icon}
				style={{ width: iconWidth ? iconWidth : "auto", height: iconHeight ? iconHeight : "auto" }}
				className="cursor-pointer"
			/>
			{label && <span className="cursor-pointer navbar_title">{label}</span>}
		</div>
	);
};

export default Item;

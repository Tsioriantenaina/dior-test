"use client";

import Image from "next/image";
import DropDown from "./DropDown";
import useProduct from "@/hooks/useProduct";
import useActive from "@/hooks/useActive";

export type filterData = {
	gender: string[];
	category: string[];
};
interface ItemProps {
	label?: string;
	icon?: any;
	onClick: (label?: string) => void;
	column?: boolean;
	iconWidth?: string;
	iconHeight?: string;
	className?: string;
	cartCount?: number;
	isOpen?: boolean;
}

const Item: React.FC<ItemProps> = ({
	label,
	icon,
	onClick,
	column,
	iconWidth,
	iconHeight,
	className,
	cartCount,
	isOpen,
}) => {
	const data = useProduct().products;

	const category = Array.from(new Set(data.map((product) => product.category.toLowerCase())));
	const gender = Array.from(new Set(data.map((product) => product.gender.toLowerCase())));
	const filterData = { category, gender };

	const active = useActive();
	const sort = ["BY PRICE ASC", "BY PRICE DESC"];

	return (
		<div className="relative">
			<div
				className={`navItem ${column ? "column" : ""} ${className ? className : ""}`}
				onClick={() => onClick(label)}
			>
				{(cartCount || cartCount !== 0) && <span className="count">{cartCount}</span>}
				{icon && (
					<Image
						alt="icon"
						src={icon}
						style={{ width: iconWidth ? iconWidth : "auto", height: iconHeight ? iconHeight : "auto" }}
						className="cursor-pointer"
					/>
				)}

				{label && (
					<span
						className={`cursor-pointer navbar_title ${
							active.pathName === label || isOpen ? "activate" : "text-muted-foreground"
						}`}
					>
						{label}
					</span>
				)}
			</div>
			{isOpen && label === "filter" && (
				<DropDown
					dataFilter={filterData}
					label={label}
					dataSort={[]}
				/>
			)}
			{isOpen && label === "sort" && (
				<DropDown
					dataSort={sort}
					label={label}
					dataFilter={{ category: [], gender: [] }}
				/>
			)}
		</div>
	);
};

export default Item;

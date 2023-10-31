"use client";

import Item, { filterData } from "./Item";
import women from "../../public/women.svg";
import men from "../../public/men.svg";
import shirts from "../../public/shirts.svg";
import bags from "../../public/bags.svg";
import jewelry from "../../public/jewelry.svg";
import { useRef } from "react";
import useOutsideDropdownClick from "@/hooks/useOutsideDropdownClick";
import useActive from "@/hooks/useActive";

interface DropDownProps {
	dataFilter: filterData;
	label: string;
	dataSort: string[];
}

const DropDown: React.FC<DropDownProps> = ({ dataFilter, dataSort, label }) => {
	const { category, gender } = dataFilter;
	const wrapperRef = useRef<HTMLDivElement>(null);
	useOutsideDropdownClick(wrapperRef);

	const active = useActive();

	const handleActive = (label) => {
		active.onActive(label);
	};

	return (
		<div
			className="dropDown"
			ref={wrapperRef}
		>
			<ul className="dropDown_list gender">
				{label === "filter" &&
					gender?.map((item) => (
						<Item
							key={item}
							icon={item === "men" ? men : women}
							onClick={handleActive}
							label={item}
							className={item}
						/>
					))}

				{label === "sort" &&
					dataSort.map((item) => (
						<Item
							key={item}
							onClick={handleActive}
							label={item}
							className={item}
						/>
					))}
			</ul>
			<ul className="dropDown_list category">
				{label === "filter" &&
					category?.map((item) => (
						<Item
							key={item}
							icon={item === "shirts" ? shirts : item === "bags" ? bags : jewelry}
							onClick={handleActive}
							label={item}
						/>
					))}
			</ul>
		</div>
	);
};

export default DropDown;

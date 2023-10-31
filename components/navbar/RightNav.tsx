"use client";

import Item from "./Item";

import filterIcon from "../../public/option.png";
import sortIcon from "../../public/sort.png";
import useFilterDropdown from "@/hooks/useFilterDropdown";
import useSortDropdown from "@/hooks/useSortDropdown";

const RightNav = () => {
	const filterDrop = useFilterDropdown();
	const sortDrop = useSortDropdown();

	return (
		<div className="navbar_right">
			<Item
				label="filter"
				icon={filterIcon}
				onClick={filterDrop.toggleOpen}
				isOpen={filterDrop.isOpen}
				iconWidth="22px"
				iconHeight="22px"
				className="filter"
			/>
			<Item
				label="sort"
				icon={sortIcon}
				onClick={sortDrop.toggleOpen}
				isOpen={sortDrop.isOpen}
				iconWidth="22px"
				iconHeight="22px"
				className="sort"
			/>
		</div>
	);
};

export default RightNav;

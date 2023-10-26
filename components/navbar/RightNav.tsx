import React from "react";
import Item from "./Item";

import filterIcon from "../../public/option.png";
import sortIcon from "../../public/sort.png";

const RightNav = () => {
	return (
		<div className="navbar_right">
			<Item
				label="filter"
				icon={filterIcon}
				onClick={() => {}}
				iconWidth="22px"
				iconHeight="22px"
				className="filter"
			/>
			<Item
				label="sort"
				icon={sortIcon}
				onClick={() => {}}
				iconWidth="22px"
				iconHeight="22px"
				className="sort"
			/>
		</div>
	);
};

export default RightNav;

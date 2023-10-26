"use client";

import TopNav from "./TopNav";
import CenterNav from "./CenterNav";
import RightNav from "./RightNav";

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between align-top navbar">
			<TopNav />
			<CenterNav />
			<RightNav />
		</div>
	);
};

export default Navbar;

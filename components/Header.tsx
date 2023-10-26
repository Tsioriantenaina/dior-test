"use client";

import Image from "next/image";
import logo from "../public/logo.png";

const Header = () => {
	return (
		<div className="flex flex-row justify-center items-center">
			<Image
				alt="logo"
				src={logo}
				className="mt-[82px] mb-[160px]"
			/>
		</div>
	);
};

export default Header;

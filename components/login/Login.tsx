"use client";

import ClientOnly from "../ClientOnly";
import Header from "../Header";
import Welcome from "../Welcome";
import LoginBody from "./LoginBody";
import ImageLeft from "./ImageLeft";

const Loging = () => {
	return (
		<ClientOnly>
			<Header />
			<div className="md:flex justify-between login">
				<div className="login_left">
					<Welcome />
					<LoginBody />
				</div>
				<ImageLeft />
			</div>
		</ClientOnly>
	);
};

export default Loging;

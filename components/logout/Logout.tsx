"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
	const router = useRouter();

	useEffect(() => {
		localStorage.removeItem("user");
		router.push("/");
	}, [router]);

	return null;
};

export default Logout;

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

import Input from "@/components/Input";
import ClientOnly from "@/components/ClientOnly";
import Loging from "@/components/login/Login";
import Container from "@/components/Container";

export default function LoginPage() {
	return (
		<ClientOnly>
			<Container>
				<Loging />
			</Container>
		</ClientOnly>
	);
}

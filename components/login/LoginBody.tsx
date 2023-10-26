"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Input from "../Input";
import Button from "../Button";

const LoginBody = () => {
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({ criteriaMode: "all" });

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, { data });
			localStorage.setItem("user", "logined");
			router.push("/home");
		} catch (error) {
			setError("apiError", { message: error });
		} finally {
			setIsLoading(false);
			reset();
		}
	};

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			router.push("/home");
		}
	}, [router]);

	return (
		<form
			className="flex flex-col items-center justify-center gap-4 loginBody"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="inputGroup">
				{(errors.login || errors.password || errors.apiError) && (
					<p className="text-rose-500 text-[14px] mb-[26px]">Your login or password are incorrect</p>
				)}
				<Input
					id="login"
					label="Loging"
					register={register}
					disabled={isLoading}
					errors={errors}
					required
					type="login"
				/>
				<Input
					id="password"
					label="Password"
					register={register}
					disabled={isLoading}
					errors={errors}
					required
					type="password"
				/>
			</div>

			<Button
				label="Login"
				onClick={() => {}}
			/>
		</form>
	);
};

export default LoginBody;

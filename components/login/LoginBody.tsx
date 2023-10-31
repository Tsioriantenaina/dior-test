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
		resetField,
		clearErrors,
		formState: { errors },
	} = useForm<FieldValues>({ criteriaMode: "all" });

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, { data });
			localStorage.setItem("user", "logined");
			router.push("/home");
		} catch (error) {
			setError("apiError", { message: `${error.message}` });
			resetField("login");
			resetField("password");
		} finally {
			setIsLoading(false);
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
			<div
				data-testid="inputGroup"
				className="inputGroup"
			>
				{(errors.login || errors.password || errors.apiError) && (
					<p
						data-testid="error-message"
						className="text-rose-500 text-[14px] mb-[26px]"
					>
						Your login or password are incorrect
					</p>
				)}
				<Input
					id="login"
					label="login"
					register={register}
					disabled={isLoading}
					errors={errors}
					required
					type="login"
					clearErrors={clearErrors}
				/>
				<Input
					id="password"
					label="password"
					register={register}
					disabled={isLoading}
					errors={errors}
					required
					type="password"
					clearErrors={clearErrors}
				/>
			</div>

			<Button
				dataTestid="loginBtn"
				label="Login"
				// onClick={onSubmit}
			/>
		</form>
	);
};

export default LoginBody;

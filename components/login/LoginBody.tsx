"use client";

import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginBody = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);
		//TO DO
		//Login
	};

	return (
		// <Fade delay={800}>
		<form
			className="flex flex-col items-center justify-center gap-4 loginBody"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="inputGroup">
				{(errors.login || errors.password) && (
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
		// </Fade>
	);
};

export default LoginBody;

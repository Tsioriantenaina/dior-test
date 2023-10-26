"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	className?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type, disabled, required, register, errors, className }) => {
	return (
		<div className="w-full relative">
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=""
				type={type}
				className={`
                    peer 
                    w-full 
                    p-1 
                    pt-6 
                    font-light 
                    bg-white border-b-2
                    outline-none 
                    transition 
                    disabled:opacity-70 
                    disabled:cursor-not-allowed
                    ${errors[id] ? "border-rose-500" : "border-[#AFAFAF]"}
                    ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
                `}
			/>
			<label
				className={`
                absolute 
                text-md 
                text-[#767676]
                text-[14px]
                duration-150 
                transform 
                -translate-y-3 
                bottom-2 
                z-10 
                origin-[0] 
                left-0
                uppercase
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-6
                ${errors[id] ? "text-rose-500" : ""}
                ${className}
                
            `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;

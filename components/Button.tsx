"use client";

import Image from "next/image";

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	big?: boolean;
	icon?: any;
	iconColor?: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, big, icon, iconColor, className }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
            button 
            button-primary 
            ${big ? "big" : ""}
            ${className ? className : ""}`}
		>
			<span>{label}</span>{" "}
			{icon && (
				<Image
					alt="icon"
					src={icon}
					className={`absolute left-4 top-3 ${iconColor ? iconColor : ""}`}
					fill
				/>
			)}
		</button>
	);
};

export default Button;

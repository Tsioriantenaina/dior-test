"use client";

import { CustomArrowProps } from "react-slick";

const NextArrow = (props: CustomArrowProps) => {
	const { className, style, onClick } = props;
	return (
		<span
			className={className}
			style={{ ...style, display: "block", zIndex: "15" }}
			onClick={onClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="69"
				height="139"
				viewBox="0 0 69 139"
				fill="none"
			>
				<path
					d="M0.877861 136.005C0.328117 136.624 0.384872 137.572 1.00461 138.122C1.62435 138.672 2.5724 138.615 3.12214 137.995L0.877861 136.005ZM66 64.8504L67.1221 65.8457L68.0683 64.7791L67.051 63.7801L66 64.8504ZM3.12214 137.995L67.1221 65.8457L64.8779 63.855L0.877861 136.005L3.12214 137.995ZM67.051 63.7801L3.051 0.929764L0.948997 3.07024L64.949 65.9206L67.051 63.7801Z"
					fill="black"
				/>
			</svg>
		</span>
	);
};

export default NextArrow;

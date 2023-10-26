import React from "react";
import Slider, { CustomArrowProps } from "react-slick";

const PrevArrow = (props: CustomArrowProps) => {
	const { className, style, onClick } = props;
	return (
		<div
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
					d="M68.1221 2.99539C68.6719 2.37565 68.6151 1.4276 67.9954 0.877859C67.3756 0.328121 66.4276 0.384869 65.8779 1.00461L68.1221 2.99539ZM3 74.1496L1.87786 73.1543L0.931721 74.2209L1.949 75.2199L3 74.1496ZM65.8779 1.00461L1.87786 73.1543L4.12214 75.145L68.1221 2.99539L65.8779 1.00461ZM1.949 75.2199L65.949 138.07L68.051 135.93L4.051 73.0794L1.949 75.2199Z"
					fill="black"
				/>
			</svg>
		</div>
	);
};

export default PrevArrow;

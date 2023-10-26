"use client";

import Image from "next/image";
import React from "react";

interface ProductImageProps {
	alt: string;
	src: string;
	className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ alt, src, className }) => {
	return (
		<div className="imageContainer">
			<Image
				alt={alt}
				src={src}
				fill
				className={className}
				loading="eager"
			/>
		</div>
	);
};

export default ProductImage;

"use client";

import { useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { useRouter } from "next/navigation";

import Product from "./Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { ProductType } from "@/types";
import useGetProducts from "@/hooks/useGetProducts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlide = () => {
	const data = useGetProducts();
	const router = useRouter();

	const settings: Settings = {
		className: "center",
		centerMode: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipe: true,
		touchMove: true,
		speed: 500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1025,
				settings: "unslick",
			},
		],
	};

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (!user) {
			router.push("/");
		}
	}, [router]);

	return (
		<div className="products">
			<Slider {...settings}>
				{data?.map((product: ProductType) => (
					<Product
						key={product.id}
						product={product}
					/>
				))}
			</Slider>
		</div>
	);
};

export default ProductSlide;

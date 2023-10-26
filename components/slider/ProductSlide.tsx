"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { data } from "../../data";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { ProductType } from "@/types";
import useProduct from "@/hooks/useProduct";

const ProductSlide = () => {
	const allProducts = useProduct();

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

	return (
		<div className="products">
			<Slider {...settings}>
				{allProducts?.products?.map((product: ProductType) => (
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

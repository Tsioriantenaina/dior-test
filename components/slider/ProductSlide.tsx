"use client";

import React, { useState } from "react";
import Product from "./Product";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { ProductType } from "@/types";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import gql from "graphql-tag";

const GET_PRODUCTS = gql`
	query GetProducts {
		products {
			image
			name
			id
			description
			category
			quantity
			price
		}
	}
`;

const ProductSlide = () => {
	const [data, setData] = useState([]);

	useQuery(GET_PRODUCTS, {
		onCompleted: (data) => {
			setData(data.products);
		},
	});

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

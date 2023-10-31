import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import gql from "graphql-tag";

import { ProductType } from "@/types";
import { useState } from "react";
import useProduct from "./useProduct";

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
			gender
		}
	}
`;
const useGetProducts = (): ProductType[] => {
	const [data, setData] = useState([]);
	const products = useProduct();

	useQuery(GET_PRODUCTS, {
		onCompleted: (data) => {
			setData(data.products);
			products.addProduct(data.products);
		},
	});

	return data;
};

export default useGetProducts;

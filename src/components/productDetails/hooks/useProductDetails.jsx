"use client";
import { getProductById } from "@/services/productservice/useProduct";
import { useEffect, useState } from "react";

const useProductDetails = (id) => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const data = await getProductById(id);
				setProduct(data);
			} catch (error) {
				console.error("Failed to fetch product:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	return { loading, product };
};

export default useProductDetails;

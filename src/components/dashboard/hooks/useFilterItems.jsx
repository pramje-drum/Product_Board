"use client";

import useDebounce from "@/common/hooks/useDebounce";
import { getAllProducts } from "@/services/productservice/useProduct";
import { useEffect, useState } from "react";

const useFilteredProducts = (filters) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const {
		search = "",
		category = "",
		rating = 0,
		inStock = false,
	} = filters || {};


	const debouncedSearch = useDebounce(search, 300, 3);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const data = await getAllProducts();
				setProducts(data?.products);
			} catch (err) {
				console.error(err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	useEffect(() => {
		let temp = [...products] || [];

		if (category) temp = temp.filter((p) => p.category === category);
		if (rating) temp = temp.filter((p) => p.rating >= parseFloat(rating));
		if (inStock) temp = temp.filter((p) => p.stock > 0);
		if (debouncedSearch)
			temp = temp.filter((p) =>
				p.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
			);

		setFilteredProducts(temp);
	}, [products, debouncedSearch, category, rating, inStock]);

	return { filteredProducts, loading, error };
};

export default useFilteredProducts;

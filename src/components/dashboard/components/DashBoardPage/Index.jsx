"use client";

import Link from "next/link";
import useFilteredProducts from "../../hooks/useFilterItems";
import ProductCard from "../ProductCard/Index";

const DashboardPage = ({ filters }) => {
	const { filteredProducts, loading, error } = useFilteredProducts(filters);

	return (
		<>
			<div className="mt-6 grid px-7 py-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
				{loading && <p>Loading...</p>}
				{error && <p>Error loading products..</p>}
				{!loading && filteredProducts.length === 0 && <p>No products found</p>}
				{!loading &&
					filteredProducts.map((product) => (
						<div key={product.id}>
							<Link href={`dashboard/${product.id}`}>
								<ProductCard product={product} />
							</Link>
						</div>
					))}
			</div>
		</>
	);
};

export default DashboardPage;

import ImageComp from "@/common/imageComp/Index";
import { getProductById } from "@/services/productservice/useProduct";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useProductDetails from "./hooks/useProductDetails";
import { notFound } from "next/navigation";

const ProductDetailsPage = ({ id }) => {
	const { loading, product } = useProductDetails(id);
	if (loading)
		return <div className="text-center mt-20 text-xl">Loading...</div>;
	if (!product)
		return notFound();

	return (
		<div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
			<div className="flex flex-col md:flex-row gap-8">
				<div className="md:w-1/2">
					<ImageComp item={product} type="details" />
				</div>

				<div className="md:w-1/2 flex flex-col justify-between">
					<div>
						<h1 className="md:text-4xl sm:text-3xl text-xl font-extrabold mb-4">
							{product.title}
						</h1>
						<p className="text-gray-600 md:text-xl sm:text-lg text-sm mb-4">
							{product.description}
						</p>

						<div className="flex flex-wrap gap-4 md:text-xl sm:text-lg text-sm mb-4">
							<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
								Category: {product.category}
							</span>
							<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
								Price: ${product.price}
							</span>
							<span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
								Discount: {product.discountPercentage}%
							</span>
						</div>

						{product.rating && (
							<div className="flex items-center mb-4">
								<span className="text-yellow-500 mr-2">★</span>
								<span className="text-gray-700 font-semibold">
									{product.rating}/5
								</span>
							</div>
						)}
					</div>
					<div>
						<Link
							href="/products"
							className="inline-block px-5 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition"
						>	
							← Back
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsPage;

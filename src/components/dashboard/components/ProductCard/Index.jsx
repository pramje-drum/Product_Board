import ImageComp from "@/common/imageComp/Index";

const ProductCard = ({ product }) => {
	return (
		<div className="bg-blue-200 border rounded-xl shadow-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 flex  sm:flex-row w-full sm:w-[70%] md:w-full mx-auto">
			<div className="w-1/2 h-40 md:h-auto relative">
				<ImageComp item={product} type="dashboard" />
			</div>

			<div className="p-4 w-1/2 flex-1 flex flex-col justify-between">
				<h2 className="text-md font-bold text-gray-900 truncate md:text-sm">
					{product?.title || "Untitled Product"}
				</h2>

				<p className="text-sm text-gray-600 capitalize mt-1 md:text-base">
					{product?.category || "Unknown Category"}
				</p>

				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2">
					<span className="text-md font-semibold text-green-700 md:text-lg">
						${product?.price ?? "N/A"}
					</span>
					<span
						className={`text-sm font-medium ${
							product?.stock > 0 ? "text-blue-600" : "text-red-600"
						} md:text-base`}
					>
						{product?.stock > 0 ? "In Stock" : "Out of Stock"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

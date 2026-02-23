import ImageComp from "@/common/imageComp/Index";

const ProductCard = ({ product }) => {
	return (
		<div className="bg-[#1e1e2f] border border-gray-700 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden flex flex-col w-full h-full group">
			{/* Image Section - Fixed, compact height instead of a massive square */}
			<div className="w-full h-28 sm:h-32 bg-[#13131f] relative flex items-center justify-center p-2">
				<div className="transition-transform duration-500  w-full h-full relative">
					<ImageComp item={product} type="dashboard" />
				</div>
			</div>

			{/* Content Section - Tighter padding (p-3 instead of p-5) */}
			<div className="p-3 flex flex-col flex-grow bg-gradient-to-b from-[#1e1e2f] to-[#151522]">
				{/* Category - Scaled down to 10px */}
				<p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
					{product?.category || "Category"}
				</p>

				{/* Title - Smaller text (text-sm) and tighter line-height */}
				<h2 className="text-sm font-medium text-gray-100 line-clamp-2 leading-tight mb-2">
					{product?.title || "Untitled Product"}
				</h2>

				{/* Footer - Reduced top padding and border spacing */}
				<div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700/50">
					{/* Price - Scaled down to text-base */}
					<span className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
						${product?.price ?? "N/A"}
					</span>

					{/* Stock Badge - Micro badge styling */}
					<span
						className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase ${
							product?.stock > 0
								? "bg-green-500/10 text-green-400 border-green-500/30"
								: "bg-red-500/10 text-red-400 border-red-500/30"
						}`}
					>
						{product?.stock > 0 ? "In Stock" : "Out of Stock"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

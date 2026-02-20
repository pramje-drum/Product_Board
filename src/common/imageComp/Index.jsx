import Image from "next/image";

const ImageComp = ({ item, type }) => {
	// fallback image agar thumbnail missing ho
	const thumbnail = item?.thumbnail || "/fallback.png";

	const isDetails = type === "details";

	return (
		<div
			className={`relative w-full ${
				isDetails ? "h-64 sm:h-80 md:h-96 lg:h-125 xl:h-150" : "w-40 h-40"
			} border border-gray-300 bg-cyan-50 rounded-xl overflow-hidden mx-auto`}
		>
			{thumbnail && (
				<Image
					src={thumbnail}
					alt={item?.name || "product"}
					fill
					className="object-scale-down"
					sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
					priority
				/>
			)}
		</div>
	);
};

export default ImageComp;

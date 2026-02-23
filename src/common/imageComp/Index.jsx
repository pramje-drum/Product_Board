import Image from "next/image";

const ImageComp = ({ item, type }) => {
	const thumbnail = item?.thumbnail || "/fallback.png";

	const isDetails = type === "details";

	return (
		<div
			className={`h-full w-full ${
				isDetails ? "h-full w-full relative" : "w-40 h-40"
			} border border-gray-300 bg-cyan-50 rounded-xl overflow-hidden mx-auto`}
		>
			{thumbnail && (
				<Image
					src={thumbnail}
					alt={item?.name || "product"}
					fill
					className="w-full h-full object-contain drop-shadow-xl transition-opacity duration-300 ease-in-out"
					sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
					priority
				/>
			)}
		</div>
	);
};

export default ImageComp;

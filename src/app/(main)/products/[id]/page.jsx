"use client";
import ProductDetailsPage from "@/components/productDetails/Index";
import { useParams } from "next/navigation";

const Details = () => {
	const params = useParams();
	return (
		<div>
			<ProductDetailsPage id={params.id} />
		</div>
	);
};

export default Details;

import { Dummy_Data_URL } from "@/constants/Index";

export async function getAllProducts() {
	const res = await fetch(Dummy_Data_URL, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}

	const data = await res.json();
	// console.log(data, "data");
	return data;
}

export async function getProductById(id) {
	const res = await fetch(`${Dummy_Data_URL}/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch product");
	}

	const data = await res.json();
	return data;
} 

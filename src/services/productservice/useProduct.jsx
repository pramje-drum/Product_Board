import { Dummy_Data_URL } from "@/constants/Index";

export async function getAllProducts() {
	try {
		const res = await fetch(Dummy_Data_URL, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch products");
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error in getAllProducts:", error.message);
		throw error; 
	}
}

export async function getProductById(id) {
	try {
		const res = await fetch(`${Dummy_Data_URL}/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch product");
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error in getProductById:", error.message);
		throw error;
	}
}

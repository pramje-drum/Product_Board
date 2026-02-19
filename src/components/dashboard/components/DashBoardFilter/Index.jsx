"use client";

import { useState, useEffect } from "react";
import { categories, ratings } from "./constants/Index";
import { CustomSelect } from "@/common/select-custom/Index";

const DashBoardFilter = ({ setFilters }) => {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("");
	const [rating, setRating] = useState("");
	const [inStock, setInStock] = useState(false);

	useEffect(() => {
		setFilters({
			search,
			category,
			rating,
			inStock,
		});
	}, [search, category, rating, inStock, setFilters]);

	return (
		<div className="flex-1 bg-slate-900 text-white shadow-md p-4 flex flex-wrap gap-4 items-center justify-around">
			<input
				type="text"
				placeholder="Search products..."
				className="border px-3 py-2 rounded-lg w-60"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<CustomSelect
				options={categories}
				className="border px-3 py-2 rounded-lg"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
			/>

			<CustomSelect
				options={ratings}
				className="border px-3 py-2 rounded-lg"
				value={rating}
				onChange={(e) => setRating(e.target.value)}
			/>

			<label className="flex items-center gap-2">
				<input
					type="checkbox"
					checked={inStock}
					onChange={(e) => setInStock(e.target.checked)}
				/>
				In Stock Only
			</label>
		</div>
	);
};

export default DashBoardFilter;

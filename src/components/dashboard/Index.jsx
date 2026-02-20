"use client"
import { useState } from "react";
import DashBoardFilter from "./components/DashBoardFilter/Index";
import DashboardPage from "./components/DashBoardPage/Index";



const Dashboard = () => {
	const [filters, setFilters] = useState({
		search: "",
		category: "",
		rating: "",
		inStock: false,
	});

	return (
		<div className="bg-gray-400 mt-16  md:mt-0 w-full h-full">
			<DashBoardFilter setFilters={setFilters} />
			<DashboardPage filters={filters} />
		</div>
	);
};

export default Dashboard;

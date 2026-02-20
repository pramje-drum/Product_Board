"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, LogOut } from "lucide-react";
import { logoutUser } from "@/services/authservice/useAuthForm";

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	const closeSidebar = () => setOpen(false);

	return (
		<div className="flex rounded-3xl">
			<div className="md:hidden fixed border-b top-0 left-0 w-full h-16 flex justify-between items-center p-4 bg-slate-900 text-white z-50">
				<h1 className="text-lg font-semibold">ProductBoard</h1>
				<button onClick={() => setOpen(true)}>
					<Menu size={26} />
				</button>
			</div>

			{open && (
				<div
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
					onClick={closeSidebar}
				/>
			)}

			<aside
				className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white z-50
					transform transition-transform duration-300 ease-in-out
					${open ? "translate-x-0" : "-translate-x-full"}
					md:translate-x-0 md:sticky md:`}
			>
				<div className="md:hidden flex justify-end p-4">
					<button onClick={closeSidebar}>
						<X size={22} />
					</button>
				</div>

				<div className="hidden md:block p-6 text-xl font-semibold border-b border-r border-slate-700">
					ProductBoard
				</div>

				<nav className="flex flex-col gap-3 px-6 mt-6">
					<Link
						href="/dashboard"
						onClick={closeSidebar}
						className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"
					>
						<Home size={20} />
						<span>Dashboard</span>
					</Link>

					<Link
						href="/products"
						onClick={closeSidebar}
						className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"
					>
						<Info size={20} />
						<span>Products</span>
					</Link>

					<Link
						href="/login"
						onClick={() => {
							closeSidebar();
							logoutUser();
						}}
						className="flex items-center gap-3 p-2 mt-4 bg-red-600 rounded-lg hover:bg-red-500 transition"
					>
						<LogOut size={20} />
						<span>Logout</span>
					</Link>
				</nav>
			</aside>
		</div>
	);
};

export default Sidebar;

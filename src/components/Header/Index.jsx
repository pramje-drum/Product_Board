"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, LogOut } from "lucide-react";
import { logoutUser } from "@/services/authservice/useAuthForm";

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	const closeSidebar = () => setOpen(false);

	return (
		<>
			<div className="md:hidden fixed top-0 left-0 w-full h-16 flex justify-between items-center px-6 bg-[#13131f] border-b border-gray-800 text-white z-50">
				<h1 className="text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
					ProductBoard
				</h1>
				<button
					onClick={() => setOpen(true)}
					className="text-gray-400 hover:text-cyan-400 transition-colors"
				>
					<Menu size={26} />
				</button>
			</div>

			{open && (
				<div
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
					onClick={closeSidebar}
				/>
			)}
			<aside
				className={`fixed top-0 left-0 h-screen w-64 bg-[#13131f] border-r border-gray-800 text-gray-300 z-50 
                    transform transition-transform duration-300 ease-in-out flex flex-col
                    ${open ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:sticky md:top-0`}
			>
				<div className="md:hidden flex justify-end p-4 border-b border-gray-800">
					<button
						onClick={closeSidebar}
						className="text-gray-400 hover:text-white transition-colors"
					>
						<X size={24} />
					</button>
				</div>

				<div className="hidden md:flex h-20 items-center px-8 border-b border-gray-800">
					<span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
						PRO-BOARD
					</span>
				</div>

				<nav className="flex flex-col gap-2 px-4 mt-6">
					<Link
						href="/dashboard"
						onClick={closeSidebar}
						className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition-all group font-medium"
					>
						<Home
							size={20}
							className="text-gray-500 group-hover:text-cyan-400 transition-colors"
						/>
						<span>Dashboard</span>
					</Link>

					<Link
						href="/products"
						onClick={closeSidebar}
						className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition-all group font-medium"
					>
						<Info
							size={20}
							className="text-gray-500 group-hover:text-cyan-400 transition-colors"
						/>
						<span>Products</span>
					</Link>
				</nav>

				<div className="mt-auto p-4 border-t border-gray-800">
					<Link
						href="/login"
						onClick={() => {
							closeSidebar();
							logoutUser();
						}}
						className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all group font-medium"
					>
						<LogOut
							size={20}
							className="text-gray-500 group-hover:text-red-400 transition-colors"
						/>
						<span>Logout</span>
					</Link>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;

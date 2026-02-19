	"use client";

	import { useState } from "react";
	import Link from "next/link";
	import { Menu, X, Home, Info, LogOut } from "lucide-react";

	const Sidebar = () => {
		const [open, setOpen] = useState(false);

		const closeSidebar = () => setOpen(false);

		return (
			<div className="flex rounded-3xl">
				{/*  mobile topbar */}
				<div className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-slate-900 text-white z-40">
					<h1 className="text-lg font-semibold">ProductBoard</h1>
					<button onClick={() => setOpen(true)}>
						<Menu size={26} />
					</button>
				</div>

				{/* overlay */}
				{open && (
					<div
						className="fixed inset-0 bg-black/50 z-40 md:hidden"
						onClick={closeSidebar}
					/>
				)}

				{/*  sidebar */}
				<aside
					className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white z-50
					transform transition-transform duration-300 ease-in-out
					${open ? "translate-x-0" : "-translate-x-full"}
					md:translate-x-0 md:static md:block`}
				>
					{/* mobile close button */}
					<div className="md:hidden flex justify-end p-4">
						<button onClick={closeSidebar}>
							<X size={22} />
						</button>
					</div>

					{/* logo */}
					<div className="hidden md:block p-6 text-xl font-semibold border-b border-slate-700">
						ProductBoard
					</div>

					{/* navigation */}
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
							href="/about"
							onClick={closeSidebar}
							className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition"
						>
							<Info size={20} />
							<span>About</span>
						</Link>

						<Link
							href="/login"
							onClick={closeSidebar}
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

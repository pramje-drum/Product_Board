"use client";

import Link from "next/link";

const WelcomePage = () => {
	return (
		<div className="w-full h-full bg-gradient-to-br from-white to-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
			<div className="absolute -top-20 -left-20 w-60 h-60 bg-slate-600 opacity-20 rounded-full animate-pulse"></div>
			<div className="absolute -bottom-20 -right-20 w-72 h-72 bg-slate-500 opacity-15 rounded-full animate-pulse"></div>
			
			<h1 className="text-5xl font-bold text-blue-900 mb-4 animate-fade-in">
				Welcome to Product Board
			</h1>
			<p className="text-xl text-blue-800 mb-2 animate-fade-in delay-200">
				Creator: <span className="font-semibold">Piyush Ramje</span>
			</p>
			<p className="text-md text-blue-700 mb-8 animate-fade-in delay-400">
				Made with ❤️
			</p>

			
			<Link
				href="/products"
				className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
			>
				Explore Products
			</Link>
		</div>
	);
};

export default WelcomePage;

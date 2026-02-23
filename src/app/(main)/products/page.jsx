import Dashboard from "@/components/dashboard/Index";

export const metadata = {
	title: "Products | ProductBoard",
	description: " page for buying products.",
	authors: [
		{ name: "Piyush Ramje" },
		{ name: "DrumKarma", url: "www.youtube.com" },
	],
	keywords: ["nextjs", "products ", "flipkart", "amazon", "blinkit"],
};

export default function DashboardPage() {
	return <Dashboard />;
}

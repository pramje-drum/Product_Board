import Dashboard from "@/components/dashboard/Index";

export const metadata = {
	title: "Dashboard | ProductBoard",
	description: " dashboard for buying products.",
	authors: [
		{ name: "Piyush Ramje" },
		{ name: "DrumKarma", url: "www.youtube.com" },
	],
	keywords: ["nextjs", "products ", "flipkart", "amazon", "blinkit"],
};

export default function DashboardPage() {
	return <Dashboard />;
}

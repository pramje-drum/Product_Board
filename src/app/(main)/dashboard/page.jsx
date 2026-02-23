import WelcomeCard from "@/components/welcome";
export const metadata = {
	title: "DashBoard | ProductBoard",
	description: "Dashboard Page for welcoming products.......",
	authors: [
		{ name: "Piyush Ramje" },
		{ name: "DrumKarma", url: "www.youtube.com" },
	],
	keywords: ["nextjs", "products ", "flipkart", "amazon", "blinkit"],
};
const Welcome = () => {
	return (
		<>
			<WelcomeCard />
		</>
	);
};

export default Welcome;

import SignupComponent from "@/components/SignupComponent/Index";

export const metadata = {
	title: "SIGNUP | ProductBoard",
	description: "Login Page for Product Board.......",
	authors: [
		{ name: "Piyush Ramje" },
		{ name: "DrumKarma", url: "www.youtube.com" },
	],
	keywords: ["nextjs", "products ", "flipkart", "amazon", "blinkit"],
};

const page = () => {
	return (
		<>
			<SignupComponent />
		</>
	);
};

export default page;

import LoginComponent from "@/components/LoginComponent/Index";

export const metadata = {
	title: "LOGIN | ProductBoard",
	description: "Login Page for Product Board.......",
	authors: [
		{ name: "Piyush Ramje" },
		{ name: "DrumKarma", url: "www.youtube.com" },
	],
	keywords: ["nextjs", "products ", "flipkart", "amazon", "blinkit"],
};

const page = () => {
	return <>
        <LoginComponent/>
    </>;
};

export default page;

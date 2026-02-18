import { Share_Tech } from "next/font/google";

const share_tech = Share_Tech({ weight: "400", subsets: ["latin"] });
const LoginSignupHeader = () => {
	return (
		<div
			className={`top-0 min-h-[10%] left-0 w-full  flex justify-center items-center ${share_tech.className} p-4 shadow-3xl bg-slate-900 text-white`}
		>
			<h1 className="text-3xl text-center md:text-5xl sm:text-4xl font-semibold">
				Welcome To ProductBoard
			</h1>
		</div>
	);
};

export default LoginSignupHeader;

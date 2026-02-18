import Header from "../../components/Header/Index";
export default function MainLayout({ children }) {
	return (
		<>
			<div className="flex">
				<Header />
				{children}
			</div>
		</>
	);
}

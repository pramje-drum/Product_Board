import Header from "../../components/Header/Index";

export default function MainLayout({ children }) {
	return (
		<div className="flex min-h-screen">
			<Header />
			<main className="flex-1">{children}</main>
		</div>
	);
}

import { ToastContainer } from "react-toastify";
import "./globals.css";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ToastContainer position="top-right" autoClose={3000} />
				{children}
			</body>
		</html>
	);
}

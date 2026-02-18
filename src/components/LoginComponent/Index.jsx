import LoginForm from "./components/LoginForm/Index";
import LoginSignupHeader from "../../common/LoginSignupHeader/Index";

const LoginComponent = () => {
	return (
		<div className="min-h-screen">
			<LoginSignupHeader />
			<LoginForm />
		</div>
	);
};

export default LoginComponent;

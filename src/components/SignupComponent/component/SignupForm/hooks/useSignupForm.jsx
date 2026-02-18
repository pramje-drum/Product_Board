import { loginUser, signupUser } from "@/services/authservice/useAuthForm";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const useSignupForm = () => {
	const router = useRouter();
	const handleSignup = (data) => {
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		try {
			signupUser(data);
			loginUser({
				username: data.username,
				password: data.password,
			});
			toast.success("Account created successfully 🎉");
			router.push("/");
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return { handleSignup };
};

export default useSignupForm;

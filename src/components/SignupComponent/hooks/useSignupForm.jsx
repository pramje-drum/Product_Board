import { loginUser, signupUser } from "@/services/authservice/useAuthForm";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useRef } from "react";

const useSignupForm = () => {
	const router = useRouter();
	const isNavigating = useRef(false);

	const handleSignup = (data) => {
		if (isNavigating.current) return;

		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		isNavigating.current = true;

		try {
			signupUser(data);

			loginUser({
				username: data.username,
				password: data.password,
			});

			toast.success("Account created successfully 🎉");

			router.replace("/dashboard");
		} catch (error) {
			isNavigating.current = false;
			toast.error(error.message);
		}
	};

	return { handleSignup };
};

export default useSignupForm;

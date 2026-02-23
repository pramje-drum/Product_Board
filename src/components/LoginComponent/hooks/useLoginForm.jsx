import { loginUser } from "@/services/authservice/useAuthForm";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-toastify";

const useLoginForm = () => {
	const router = useRouter();
	const isNavigating = useRef(false);

	const handleLogin = (data) => {
		if (isNavigating.current) return;

		isNavigating.current = true;

		try {
			loginUser(data);
			toast.success("Login Succesfull");
			router.replace("/dashboard");
		} catch (error) {
			isNavigating.current = false;
		}
	};

	return { handleLogin };
};
export default useLoginForm;

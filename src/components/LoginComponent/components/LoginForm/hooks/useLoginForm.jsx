import { loginUser } from '@/services/authservice/useAuthForm';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useLoginForm = () => {
    const router = useRouter();

	const handleLogin = (data) => {
		try {
			loginUser(data);

			toast.success("Login successful 🎉");

			router.push("/dashboard");
		} catch (error) {
			toast.error(error.message); 
		}
	};
  return {
    handleLogin
  }
}

export default useLoginForm

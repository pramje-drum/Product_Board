"use client";

import Link from "next/link";
import FormController from "@/common/custom-form/Index";
import { SIGNUP_CONFIG } from "../../constants/Index";
import { toast } from "react-toastify";
import { loginUser, signupUser } from "@/services/authservice/useAuthForm";
import { useRouter } from "next/navigation";
import useSignupForm from "../../hooks/useSignupForm";

const SignupForm = () => {
	const { handleSignup } = useSignupForm();

	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-500 px-4">
			<div className="w-full max-w-md bg-slate-200 shadow-md rounded-2xl p-8">
				<h1 className="text-2xl font-semibold text-center mb-6">SIGN UP</h1>

				<FormController config={SIGNUP_CONFIG} onSubmit={handleSignup} />

				{/* Login Navigation */}
				<div className="text-center mt-6 text-sm">
					<span>Already have an account? </span>
					<Link
						href="/login"
						className="font-semibold text-slate-900 hover:underline"
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;

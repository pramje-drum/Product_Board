"use client";

import FormController from "@/common/custom-form/Index";
import Link from "next/link";
import { LOGIN_CONFIG } from "../../constants/Index";
import useLoginForm from "./hooks/useLoginForm";

const LoginForm = () => {
	const { handleLogin } = useLoginForm();
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-500 px-4">
			<div className="w-full max-w-md bg-slate-200 shadow-md rounded-2xl p-8">
				<h1 className="text-2xl font-semibold text-center mb-6">LOGIN</h1>

				<FormController config={LOGIN_CONFIG} onSubmit={handleLogin} />

				<div className="text-center mt-6 text-sm">
					<span>Dont have an account? </span>
					<Link
						href="/signup"
						className="font-semibold text-slate-900 hover:underline"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;

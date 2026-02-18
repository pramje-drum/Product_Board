"use client"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputField({
	label,
	type = "text",
	placeholder,
	field,
	error,
	showPasswordToggle = false,
}) {
	const [showPassword, setShowPassword] = useState(false);

	const inputType =
		showPasswordToggle && type === "password"
			? showPassword
				? "text"
				: "password"
			: type;

	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label className="text-sm font-medium text-gray-700">{label}</label>
			)}

			<div className="relative">
				<input
					{...field}
					type={inputType}
					placeholder={placeholder}
					className={`w-full px-3 py-2 rounded-md border outline-none transition
						${error ? "border-red-500" : "border-gray-300"}
						focus:ring-2 focus:ring-slate-900`}
				/>

				{showPasswordToggle && type === "password" && (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
					>
						{showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
					</button>
				)}
			</div>

			{error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
		</div>
	);
}

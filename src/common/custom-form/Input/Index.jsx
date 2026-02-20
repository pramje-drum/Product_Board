export default function InputField({
	label,
	type = "text",
	placeholder,
	field,
	error,
}) {
	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label className="text-sm font-medium text-gray-700">{label}</label>
			)}

			<div className="relative">
				<input
					{...field}
					type={type}
					placeholder={placeholder}
					className={`w-full px-3 py-2 rounded-md border outline-none transition
						${error ? "border-red-500" : "border-gray-300"}
						focus:ring-2 focus:ring-slate-900`}
				/>
			</div>

			{error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
		</div>
	);
}

export const CustomSelect = ({ options = [], ...props }) => {
	return (
		<select
			{...props}
			// className="bg-white border border-slate-300 rounded-md px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
		>
			{options.map((option) => (
				<option key={option.value} value={option.value} className="text-white">
					{option.label}
				</option>
			))}
		</select>
	);
};

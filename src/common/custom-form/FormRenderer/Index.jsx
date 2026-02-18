import InputField from "../Input/Index";

export default function FormRenderer({ config, field, error }) {
	const {
		label,
		type,
		placeholder,
		showForgotPassword,
		inputType,
		showPasswordToggle,
	} = config;

	return (
		<div>
			<InputField
				label={label}
				type={type}
				placeholder={placeholder}
				error={error}
				inputType={inputType}
				field={field}
				showPasswordToggle={showPasswordToggle}
			/>
		</div>
	);
}

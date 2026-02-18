export const LOGIN_CONFIG = [
	{
		name: "username",
		label: "Username",
		type: "text",
		placeholder: "User10101",
		rules: {
			required: "Username is required",
			minLength: {
				value: 3,
				message: "Minimum 3 characters required",
			},
		},
	},
	{
		name: "password",
		label: "Password",
		type: "password",
		placeholder: "••••••••",
		showPasswordToggle: true,
		showForgotPassword: true,
		rules: {
			required: "Password is required",
			minLength: {
				value: 6,
				message: "Minimum 6 characters required",
			},
		},
	},
];

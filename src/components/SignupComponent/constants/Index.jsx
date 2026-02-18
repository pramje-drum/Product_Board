export const SIGNUP_CONFIG = [
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
		name: "email",
		label: "Email",
		type: "email",
		placeholder: "example@email.com",
		rules: {
			required: "Email is required",
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: "Enter a valid email address",
			},
		},
	},
	{
		name: "password",
		label: "Password",
		type: "password",
		placeholder: "Create a strong password",
		showPasswordToggle: true,
		rules: {
			required: "Password is required",
			minLength: {
				value: 6,
				message: "Minimum 6 characters required",
			},
		},
	},
	{
		name: "confirmPassword",
		label: "Confirm Password",
		type: "password",
		placeholder: "Re-enter your password",
		showPasswordToggle: true,
		rules: {
			required: "Please confirm your password",
			minLength: {
				value: 6,
				message: "Minimum 6 characters required",
			},
		},
	},
];

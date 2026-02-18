const USERS_KEY = "app_users";
const TOKEN_KEY = "auth_token";

// signup
export const signupUser = (data) => {
	const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

	const userExists = users.find((u) => u.username === data.username);

	if (userExists) {
		throw new Error("UserName already exists");
	}

	const newUser = {
		id: Date.now(),
		username: data.username,
		email: data.email,
		password: data.password,
	};

	users.push(newUser);
	localStorage.setItem(USERS_KEY, JSON.stringify(users));

	return newUser;
};

// login
export const loginUser = (data) => {
	const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

	const user = users.find(
		(u) => u.username === data.username && u.password === data.password,
	);

	if (!user) {
		throw new Error("Invalid credentials");
	}

	// fake token
	const token = `token-${Date.now()}`;

	localStorage.setItem(TOKEN_KEY, token);

	document.cookie = `auth_token=${token}; path=/; max-age=86400`;

	return token;
};

//logout
export const logoutUser = () => {
	localStorage.removeItem(TOKEN_KEY);
	document.cookie = "auth_token=; path=/; max-age=0";
};

//chekc token
export const isAuthenticated = () => {
	return !!localStorage.getItem(TOKEN_KEY);
};

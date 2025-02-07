import instance from "./config";

export const logout = () => instance.url("/users/signout").get();
export const getMyInfo = () =>
	instance.url(`/users`).query({ portal: "main" }).get();

export const signIn = (email, password) =>
	instance
		.url("/users/signin")
		.post({ user: { email, password }, portal: "main" });

/**
 * default superGroup of user
 */
let superGroup = "5dd95e8097bc204881be3f2c";
export const signUp = (email, password) =>
	instance.url("/users/signup").post({
		email,
		password,
		supergroup: superGroup,
		superGroup,
		portal: "main",
	});

export const resetPassword = (password, token) =>
	instance.url("/users/resetPassword").post({ password, token });

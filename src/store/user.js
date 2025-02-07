import {
	logout as logoutApi,
	getMyInfo as getMyInfoApi,
	signIn as signInApi,
	signUp as signUpApi,
} from "../api/users";

let user;
let subscribers = {};
let isFetchingUserInfo = false;
const notifyOne = (key) => {
	try {
		subscribers[key](user);
	} catch (e) {
		console.error(e);
	}
};
const notifyAll = () => {
	Object.keys(subscribers).forEach((key) => {
		notifyOne(key);
	});
};
const setUser = (u) => {
	user = u;
	notifyAll();
};
const store = {
	subscribe: (subscription) => {
		const key = Math.ceil(1000 * Math.random()) + Date.now();
		subscribers[key] = subscription;
		notifyOne(key);
		return () => {
			delete subscribers[key];
		};
	},
	set: setUser,
};

export const logout = () =>
	logoutApi().json(() => {
		setUser(null);
	});

const disabledCookieCheck = false;

export const fetchUserInfo = () => {
	if (
		!isFetchingUserInfo &&
		typeof document !== "undefined" &&
		(disabledCookieCheck ||
			(document.cookie && document.cookie.includes("auth=")))
	) {
		isFetchingUserInfo = true;
		getMyInfoApi()
			.json(({ user }) => {
				setUser(user);
				isFetchingUserInfo = false;
				return user;
			})
			.catch((error) => {
				isFetchingUserInfo = false;
			});
	}
};

export const signIn = (email, password) =>
	signInApi(email, password)
		.error(400, (error) => {
			let code = "";
			try {
				code = error.json.error.code;
			} finally {
				const parsedError = getErrorForCode(code);
				throw parsedError;
			}
		})
		.json(({ user }) => {
			setUser(user);
			return user;
		});

export const signUp = (email, password) =>
	signUpApi(email, password)
		.error(422, (error) => {
			let code = "";
			try {
				code = error.json.error.code;
			} finally {
				const parsedError = getErrorForCode(code);
				throw parsedError;
			}
		})
		.fetchError((error) => {
			throw { message: "Network error occurred. Please try again." };
		})
		.json(({ user }) => {
			setUser(user);
			return user;
		});

const getErrorForCode = (code) => {
	const errorMap = {
		"auth/email-already-in-use": {
			message: "Email already in use",
			field: "email",
			showSignInInstead: true,
		},
		"auth/invalid-email": {
			message: "Please enter a valid email address",
			field: "email",
		},
		"auth/weak-password": {
			message: "Password must be atlease 6 characters long",
			field: "password",
		},
		"auth/wrong-password": {
			message: "Incorrect password",
			field: "password",
			showResetPasswordInstead: true,
		},
		"auth/user-not-found": {
			message: "Email address not found",
			field: "email",
			showSignUpInstead: true,
		},
	};
	const error = errorMap[code];
	if (error) {
		return error;
	} else {
		return {
			message: "Unknown error occurred, please try again",
		};
	}
};

export default store;

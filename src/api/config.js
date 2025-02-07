import wretch from "wretch";

const instance = wretch(process.env.API_BASE_URL)
	.defaults({
		credentials: "include",
	})
	.errorType("json");

export const cacheInstance = wretch(process.env.CACHE_API_BASE_URL)
	.defaults({
		credentials: "include",
	})
	.errorType("json");

export default instance;

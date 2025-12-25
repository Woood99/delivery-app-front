import axios from "axios";

import {
	deleteTokensStorage,
	getAccessToken
} from "@/services/auth/auth.helper";

import { API_URL } from "@/config/api.config";

import { errorCatch } from "@/api/error.api";

import { getNewTokens } from "./helper.api";

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json"
	}
});

instance.interceptors.request.use(async config => {
	const accessToken = await getAccessToken();

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

instance.interceptors.response.use(
	config => {
		console.log("✅ [Axios Response]:", {
			status: config.status,
			method: config.config.method?.toUpperCase(),
			url: config.config.url,
			data: config.data,
			config
		});
		return config;
	},
	async error => {
		const originalRequest = error.config;
		console.error("❌ [Axios Error]:", {
			message: error.message,
			status: error.response?.status,
			error
		});
		if (
			(error.response.status === 401 ||
				errorCatch(error) === "jwt expired" ||
				errorCatch(error) === "jwt must be provided") &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await getNewTokens();
				return instance.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === "jwt expired")
					await deleteTokensStorage();
			}
		}

		throw error;
	}
);

export default instance;

import { IAuthResponse } from "@/types/auth.interface";

import { deleteFromStorage, saveToStorage } from "@/services/auth/auth.helper";

import { getAuthUrl } from "@/config/api.config";

import { request } from "@/api/request.api";

export const AuthService = {
	async main(variant: "reg" | "login", email: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`/${variant === "reg" ? "register" : "login"}`),
			method: "POST",
			data: { email, password }
		});

		if (response.accessToken) await saveToStorage(response);

		return response;
	},

	async logout() {
		await deleteFromStorage();
	}
};

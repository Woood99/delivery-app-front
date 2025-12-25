import { ICategory } from "@/types/category.interface";

import { getCategoriesUrl } from "@/config/api.config";

import { request } from "@/api/request.api";

export const CategoryService = {
	async getAll() {
		return request<ICategory[]>({
			url: getCategoriesUrl(""),
			method: "GET"
		});
	},
	async getById(id: string) {
		return request<ICategory>({
			url: getCategoriesUrl(`/by-slug/${id}`),
			method: "GET"
		});
	}
};

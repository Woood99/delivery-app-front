import { IProduct } from "@/types/product.inteface";

import { getProductsUrl } from "@/config/api.config";

import { request } from "@/api/request.api";

export const ProductService = {
	async getAll(searchTerm?: string) {
		return request<IProduct[]>({
			url: getProductsUrl(""),
			method: "GET",
			params: {
				searchTerm: searchTerm || null
			}
		});
	},
	async getById(id: string) {
		return request<IProduct>({
			url: getProductsUrl(`/by-slug/${id}`),
			method: "GET"
		});
	},
	async getByCategory(id: string) {
		return request<IProduct[]>({
			url: getProductsUrl(`/by-category/${id}`),
			method: "GET",
			data: id
		});
	}
};

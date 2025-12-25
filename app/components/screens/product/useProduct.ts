import { useQuery } from "@tanstack/react-query";

import { ProductService } from "@/services/product.service";

import { useTypedRoute } from "@/hooks";

export const useProduct = () => {
	const { params } = useTypedRoute<"Product">();

	const { data: product, isLoading } = useQuery({
		queryKey: ["get product by slug", params.slug],
		queryFn: () => ProductService.getById(params.slug)
	});

	return {
		product,
		isLoading
	};
};

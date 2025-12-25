import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "@/services/category.service";
import { ProductService } from "@/services/product.service";

import { useTypedRoute } from "@/hooks";

export const useCategory = () => {
	const { params } = useTypedRoute<"Category">();

	const { data: category, isLoading: isCategoryLoading } = useQuery({
		queryKey: ["get category by slug", params.slug],
		queryFn: () => CategoryService.getById(params.slug)
	});

	const { data: products, isLoading: isProductsLoading } = useQuery({
		queryKey: ["get products by category", params.slug],
		queryFn: () => ProductService.getByCategory(params.slug),
		enabled: !!category?.id
	});

	const isLoading = isCategoryLoading || isProductsLoading;

	return { category, products, isLoading };
};

import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "@/services/category.service";

export const useGetCategories = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ["get categories"],
		queryFn: () => CategoryService.getAll()
	});

	return { categories, isLoading };
};

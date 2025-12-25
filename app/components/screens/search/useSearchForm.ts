import { useForm } from "react-hook-form";

import { ISearchFormData } from "./search.interface";
import { useDebounce } from "@/hooks";

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: "onChange"
	});

	const searchTerm = watch("searchTerm");
	const debouncedSearch = useDebounce(searchTerm, 320);

	return {
		debouncedSearch,
		searchTerm,
		control
	};
};

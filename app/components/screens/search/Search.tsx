import { View } from "react-native";

import Layout from "@/components/layout/Layout";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";
import Field from "@/components/ui/field/Field";
import Heading from "@/components/ui/heading/Heading";

import { ISearchFormData } from "./search.interface";
import { useSearch } from "./useSearch";

const Search = () => {
	const { searchTerm, products, isLoading, control } = useSearch();

	return (
		<Layout>
			<Heading>Search</Heading>
			<View className="mt-3">
				<Field<ISearchFormData>
					placeholder="Type something..."
					control={control}
					name="searchTerm"
					keyboardType="web-search"
					variant="primary"
				/>
			</View>
			{!!searchTerm && (
				<View className="mt-2">
					{isLoading ? <Loader /> : <Catalog products={products} />}
				</View>
			)}
		</Layout>
	);
};

export default Search;

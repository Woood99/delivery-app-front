import { FlatList, View } from "react-native";

import Loader from "@/components/ui/Loader";
import Heading from "@/components/ui/heading/Heading";

import CategoryItem from "./CategoryItem";
import { useGetCategories } from "./useGetCategories";

const Categories = () => {
	const { categories, isLoading } = useGetCategories();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<View className="flex flex-col mt-5 mb-4">
			<Heading>Categories</Heading>
			<FlatList
				className="mt-5"
				data={categories}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<CategoryItem category={item} key={item.id} />
				)}
			/>

			<View className="flex-row mt-5">
				{categories?.map(category => (
					<CategoryItem category={category} key={category.id} />
				))}
			</View>
		</View>
	);
};

export default Categories;

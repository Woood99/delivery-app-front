import { View } from "react-native";

import Layout from "@/components/layout/Layout";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";

import { useCategory } from "./useCategory";

const Category = () => {
	const { category, products, isLoading } = useCategory();

	if (isLoading) {
		return (
			<Layout>
				<Loader />
			</Layout>
		);
	}

	return (
		<Layout>
			{category ? (
				<Catalog title={category.name} products={products} />
			) : (
				<View>Category not found</View>
			)}
		</Layout>
	);
};

export default Category;

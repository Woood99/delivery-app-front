import Layout from "@/components/layout/Layout";
import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";

import { useGetAllProducts } from "./useGetAllProducts";

const Explorer = () => {
	const { products, isLoading } = useGetAllProducts();

	if (isLoading) {
		return (
			<Layout>
				<Loader />
			</Layout>
		);
	}

	return (
		<Layout>
			<Catalog title="Explorer" products={products} />
		</Layout>
	);
};

export default Explorer;

import Loader from "@/components/ui/Loader";
import Catalog from "@/components/ui/catalog/Catalog";

import { useProducts } from "./useProducts";

const Products = () => {
	const { products, isLoading } = useProducts();

	if (isLoading) {
		return <Loader />;
	}

	return <Catalog title="Products" products={products} />;
};

export default Products;

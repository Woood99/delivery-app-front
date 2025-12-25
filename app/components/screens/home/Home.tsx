import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";

import Banner from "./Banner";
import Categories from "./categories/Categories";
import Products from "./products/Products";

const Home = () => {
	return (
		<Layout>
			<Header />
			<Banner />
			<Categories />
			<Products />
		</Layout>
	);
};

export default Home;

import {
	Explorer,
	Favorites,
	Home,
	Profile,
	Search
} from "@/components/screens";
import Cart from "@/components/screens/cart/Cart";
import Category from "@/components/screens/category/Category";
import Product from "@/components/screens/product/Product";

import { IRoute } from "./navigation.types";

export const routes: IRoute[] = [
	{
		name: "Home",
		component: Home
	},
	{
		name: "Favorites",
		component: Favorites
	},
	{
		name: "Search",
		component: Search
	},
	{
		name: "Explorer",
		component: Explorer
	},
	{
		name: "Profile",
		component: Profile
	},
	{
		name: "Cart",
		component: Cart
	},
	{
		name: "Category",
		component: Category
	},
	{
		name: "Product",
		component: Product
	}
];

import { Auth, Home } from "@/components/screens";

import { IRoute } from "./navigation.types";

export const routes: IRoute[] = [
	{
		name: "Auth",
		component: Auth
	},
	{
		name: "Home",
		component: Home
	}
];

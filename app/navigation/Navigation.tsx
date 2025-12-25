import {
	NavigationContainer,
	useNavigationContainerRef
} from "@react-navigation/native";
import { useEffect, useState } from "react";

import BottomMenu from "@/components/layout/bottom-menu/BottomMenu";

import { useCheckAuth } from "@/providers/auth/useCheckAuth";

import PrivateNavigator from "./PrivateNavigator";
import { useAuth } from "@/hooks";

const Navigation = () => {
	const { user } = useAuth();

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	);
	const navRef = useNavigationContainerRef();

	useEffect(() => {
		const setRoute = () => setCurrentRoute(navRef.getCurrentRoute()?.name);

		setRoute();
		const listener = navRef.addListener("state", setRoute);

		return () => {
			navRef.removeListener("state", listener);
		};
	}, []);

	useCheckAuth(currentRoute);

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigator />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	);
};

export default Navigation;

import * as SplashScreen from "expo-splash-screen";
import { ReactNode, createContext, useEffect, useState } from "react";

import {
	getAccessToken,
	getUserFromStorage
} from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";

import { IAuthProvider, TypeUserState } from "./auth-provider.interface";

let ignore = SplashScreen.preventAutoHideAsync();

interface Props {
	children: ReactNode;
}
export const AuthContext = createContext({} as IAuthProvider);

const AuthProvider = (props: Props) => {
	const { children } = props;

	const [user, setUser] = useState<TypeUserState>(null);

	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};

	useEffect(() => {
		let isMounted = true;

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken();

				if (accessToken) {
					const user = await getUserFromStorage();
					if (isMounted) setUser(user);
				}
			} catch (error) {
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		let ignore = checkAccessToken();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

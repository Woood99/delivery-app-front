import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Toast from "@/components/ui/toast/Toast";

import Navigation from "@/navigation/Navigation";

import { persistor, store } from "@/store/store";

import "./global.css";

import { AuthProvider } from "@/providers";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider>
						<SafeAreaProvider>
							<SafeAreaView style={{ flex: 1 }}>
								<Navigation />
							</SafeAreaView>
						</SafeAreaProvider>
					</AuthProvider>
					<StatusBar style="auto" />
					<Toast />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}

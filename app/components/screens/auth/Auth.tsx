import { Pressable, Text, View } from "react-native";

import { useTypedNavigation } from "@/hooks";

const Auth = () => {
	const { navigate } = useTypedNavigation();

	return (
		<View>
			<Text>Auth</Text>
			<Pressable onPress={() => navigate("Home")}>
				<Text>Go to Home</Text>
			</Pressable>
		</View>
	);
};

export default Auth;

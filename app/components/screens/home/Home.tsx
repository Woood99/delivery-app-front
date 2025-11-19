import { Pressable, Text, View } from "react-native";

import { useTypedNavigation } from "@/hooks";

const Home = () => {
	const { navigate } = useTypedNavigation();

	return (
		<View>
			<Text>Auth</Text>
			<Pressable onPress={() => navigate("Auth")}>
				<Text>Go to Home</Text>
			</Pressable>
		</View>
	);
};

export default Home;

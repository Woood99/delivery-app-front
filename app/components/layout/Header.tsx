import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { useProfile } from "../screens/profile/useProfile";
import Button from "../ui/button/Button";

import { useTypedNavigation } from "@/hooks";

const Header = () => {
	const { navigate } = useTypedNavigation();
	const { profile } = useProfile();

	return (
		<View className="flex-row justify-between items-center">
			<Text className="font-medium text-2xl">Hello, {profile?.name}</Text>

			<Button onPress={() => navigate("Cart")}>
				<Ionicons name="cart" size={26} color="#374151" />
			</Button>
		</View>
	);
};

export default Header;

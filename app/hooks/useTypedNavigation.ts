import { NavigationProp, useNavigation } from "@react-navigation/native";

import { TypeRootStackParamList } from "@/navigation/navigation.types";

export const useTypedNavigation = () => {
	return useNavigation<NavigationProp<TypeRootStackParamList>>();
};


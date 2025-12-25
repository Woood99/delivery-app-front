import { View } from "react-native";

import BottomMenuItem from "./BottomMenuItem";
import { BottomMenuData } from "./bottom-menu.data";
import { TypeNavigate } from "./bottom-menu.interface";

interface Props {
	nav: TypeNavigate;
	currentRoute?: string;
}

const BottomMenu = (props: Props) => {
	return (
		<View className="px-2 flex-row justify-between items-center w-full border-t border-solid border-t-[#bbbbbb] bg-white">
			{BottomMenuData.map(item => (
				<BottomMenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	);
};

export default BottomMenu;

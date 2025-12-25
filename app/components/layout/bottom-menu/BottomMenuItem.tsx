import { Feather } from "@expo/vector-icons";

import Button from "@/components/ui/button/Button";

import { IBottomMenuItem, TypeNavigate } from "./bottom-menu.interface";

interface Props {
	item: IBottomMenuItem;
	nav: TypeNavigate;
	currentRoute?: string;
}

const BottomMenuItem = (props: Props) => {
	const { item, nav, currentRoute } = props;
	const isActive = item.path === currentRoute;

	return (
		<Button onPress={() => nav(item.path)} className="items-center w-1/5 py-5">
			<Feather
				name={item.icon}
				size={26}
				color={isActive ? "#47AA52" : "#374151"}
			/>
		</Button>
	);
};

export default BottomMenuItem;

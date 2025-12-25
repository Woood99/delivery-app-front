import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

import Button from "@/components/ui/button/Button";

import { ICartItem } from "@/types/cart.interface";

import { useActions, useCart } from "@/hooks";

interface ICartActions {
	item: ICartItem;
}

const CartActions = ({ item }: ICartActions) => {
	const { changeQuantity } = useActions();

	const { items } = useCart();
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity;

	return (
		<View className="mt-4 flex-row items-center gap-x-4">
			<Button
				onPress={() => changeQuantity({ id: item.id, type: "minus" })}
				disabled={quantity === 1}>
				<AntDesign name="minus" size={18} />
			</Button>
			<Text>{quantity}</Text>
			<Button
				onPress={() => changeQuantity({ id: item.id, type: "plus" })}>
				<AntDesign name="plus" size={18} />
			</Button>
		</View>
	);
};

export default CartActions;

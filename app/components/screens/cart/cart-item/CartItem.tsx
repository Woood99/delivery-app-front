import { Image, Text, View } from "react-native";

import Button from "@/components/ui/button/Button";

import { ICartItem } from "@/types/cart.interface";

import { convertPrice } from "@/utils/covertPrice";
import { getMediaSource } from "@/utils/getMediaSource";

import CartActions from "./CartActions";
import { useTypedNavigation } from "@/hooks";

interface Props {
	item: ICartItem;
}

const CartItem = (props: Props) => {
	const { item } = props;
	const { navigate } = useTypedNavigation();

	return (
		<View className="flex-row mt-5">
			<Button
				onPress={() => navigate("Product", { slug: item.product.slug })}
				className="bg-gray-100 rounded-xl overflow-hidden py-3 px-3 items-center w-28">
				<Image
					source={getMediaSource(item.product.image)}
					width={80}
					height={80}
				/>
			</Button>

			<View className="ml-5 mt-2">
				<Text className="font-semibold text-xl">
					{item.product.name}
				</Text>
				<Text className="mt-1">{convertPrice(item.price)}</Text>
				<CartActions item={item} />
			</View>
		</View>
	);
};

export default CartItem;

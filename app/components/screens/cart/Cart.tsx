import { Text, View } from "react-native";

import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";

import { convertPrice } from "@/utils/covertPrice";

import CartItem from "./cart-item/CartItem";
import { useCart } from "@/hooks";

const Cart = () => {
	const { items, total } = useCart();

	return (
		<>
			<Layout>
				<Heading>Cart</Heading>
				{items.length ? (
					items.map(item => <CartItem item={item} key={item.id} />)
				) : (
					<Text className="mt-2">Product not found</Text>
				)}
			</Layout>
			{!!items.length && (
				<View className="absolute bottom-8 mx-5 w-[90%]">
					<Text className="font-bold text-xl mb-4">
						Total: {convertPrice(total)}
					</Text>
					<Button onPress={() => {}} variant="primary">
						Place order
					</Button>
				</View>
			)}
		</>
	);
};

export default Cart;

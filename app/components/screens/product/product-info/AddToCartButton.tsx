import Button from "@/components/ui/button/Button";

import { IProduct } from "@/types/product.inteface";

import { useActions, useCart } from "@/hooks";

interface IAddToCartButton {
	product: IProduct;
}

const AddToCartButton = ({ product }: IAddToCartButton) => {
	const { addToCart, removeFromCart } = useActions();
	const { items } = useCart();

	const currentElement = items.find(item => item.product.id === product.id);

	const onToggle = () => {
		if (currentElement) {
			removeFromCart({ id: currentElement.id });
		} else {
			addToCart({ product, quantity: 1, price: product.price });
		}
	};

	return (
		<Button onPress={onToggle} variant="primary" className="mt-6">
			{currentElement ? "Remove from cart" : "Add to cart"}
		</Button>
	);
};

export default AddToCartButton;

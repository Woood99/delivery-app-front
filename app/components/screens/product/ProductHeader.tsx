import { View } from "react-native";

import { useTypedNavigation } from "@/hooks/useTypedNavigation";

import FavoriteButton from "./FavoriteButton";
import ProductButton from "./ProductButton";
import { IProductComponent } from "./product-page.interface";

const ProductHeader = ({ product }: IProductComponent) => {
	const { goBack } = useTypedNavigation();

	return (
		<View>
			<View className="flex-row justify-between mt-2">
				<ProductButton
					onPress={goBack}
					icon="chevron-left"
					iconSize={26}
					color="#555"
				/>
				<FavoriteButton productId={product.id} />
			</View>
		</View>
	);
};

export default ProductHeader;

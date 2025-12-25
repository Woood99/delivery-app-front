import { Image, Pressable, Text } from "react-native";

import { ICategory } from "@/types/category.interface";

import { getMediaSource } from "@/utils/getMediaSource";

import { useTypedNavigation } from "@/hooks";

interface Props {
	category: ICategory;
}

const CategoryItem = ({ category }: Props) => {
	const { navigate } = useTypedNavigation();

	return (
		<Pressable
			onPress={() => navigate("Category", { slug: category.slug })}
			className="flex-grow !flex !flex-col items-center rounded-xl bg-gray-100 py-5 px-10 mx-1.5 ">
			<Image
				source={getMediaSource(category.image)}
				className="w-10 h-8 p-3"
				style={{ resizeMode: "cover" }}
			/>
			<Text className="font-normal text-xs text-center mt-3">
				{category.name}
			</Text>
		</Pressable>
	);
};

export default CategoryItem;

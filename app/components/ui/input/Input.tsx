import cn from "clsx";
import { Text, TextInput, View } from "react-native";

import { IInput } from "./input.interface";

const inputVariants = {
	clear: {
		container: "",
		input: ""
	},
	primary: {
		container:
			"bg-white w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5 border-gray-400",
		input: "text-black text-base"
	}
} as const;

const Input = (props: IInput) => {
	const { className, value, variant = "clear", error, ...rest } = props;

	const variantStyle = inputVariants[variant];

	return (
		<>
			<View
				className={cn(
					variantStyle.container,
					error && "border-red-500",
					className
				)}>
				<TextInput
					value={(value || "").toString()}
					className={cn(variantStyle.input)}
					{...rest}
				/>
			</View>
			{error && <Text className="text-red-500">{error.message}</Text>}
		</>
	);
};

export default Input;

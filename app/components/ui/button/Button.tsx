import cn from "clsx";
import { Pressable, Text } from "react-native";

import { IButton } from "./button.interface";

const buttonVariants = {
	clear: {
		container: "",
		text: ""
	},
	primary: {
		container: "self-center bg-green w-full py-3 font-light rounded-lg",
		text: "text-white text-center font-medium text-lg"
	}
} as const;

const Button = (props: IButton) => {
	const { className, children, variant = "clear", ...rest } = props;

	const variantStyle = buttonVariants[variant];

	return (
		<Pressable className={cn(variantStyle.container, className)} {...rest}>
			<Text className={variantStyle.text}>{children}</Text>
		</Pressable>
	);
};

export default Button;

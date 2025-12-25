import cn from "clsx";
import { ReactNode } from "react";
import { Text } from "react-native";

interface Props {
	isCenter?: boolean;
	className?: string;
	children: ReactNode;
}

const Heading = (props: Props) => {
	const { children, isCenter = false, className } = props;

	return (
		<Text
			className={cn(
				"text-black font-medium text-xl",
				isCenter && "text-center",
				className
			)}>
			{children}
		</Text>
	);
};

export default Heading;

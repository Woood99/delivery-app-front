import cn from "clsx";
import { ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface Props {
	children: ReactNode;
	className?: string;
	showHeader?: boolean;
}

const Layout = (props: Props) => {
	const { children, className, showHeader = false } = props;

	return (
		<View
			className={cn(
				"h-full w-full px-4",
				!showHeader && "mt-4",
				className
			)}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{children}
			</ScrollView>
		</View>
	);
};

export default Layout;

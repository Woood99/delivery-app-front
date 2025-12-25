import { ReactNode } from "react";
import { PressableProps } from "react-native";

export interface IButton extends PressableProps {
	className?: string;
	children: ReactNode;
	variant?: "clear" | "primary";
}

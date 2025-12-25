import { ErrorOption } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface IInput extends TextInputProps {
	variant?: "clear" | "primary";
	error?: ErrorOption;
}

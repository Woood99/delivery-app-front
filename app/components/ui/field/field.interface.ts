import {
	Control,
	FieldPath,
	FieldValues,
	RegisterOptions
} from "react-hook-form";
import { TextInputProps } from "react-native";

import { IInput } from "../input/input.interface";

export interface IField<T extends FieldValues>
	extends Omit<TextInputProps, "onChange" | "onChangeText" | "value"> {
	control?: Control<T>;
	name: FieldPath<T>;
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
	>;
	variant?: IInput["variant"];
}

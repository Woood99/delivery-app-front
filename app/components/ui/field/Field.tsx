import { Controller, useFormContext } from "react-hook-form";

import Input from "../input/Input";

import { IField } from "./field.interface";

const Field = <T extends Record<string, any>>(props: IField<T>) => {
	const { control: propControl, rules, name, ...rest } = props;

	const context = useFormContext<T>();
	const control = propControl || context?.control;

	if (!control) {
		throw new Error("Field needs control prop or FormProvider");
	}

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState }) => {
				return (
					<Input
						autoCapitalize="none"
						onChangeText={field.onChange}
						value={field.value}
						placeholderTextColor="#6A6A6A"
						error={fieldState.error}
						{...rest}
					/>
				);
			}}
		/>
	);
};

export default Field;

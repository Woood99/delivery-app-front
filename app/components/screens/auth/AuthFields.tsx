import Field from "@/components/ui/field/Field";

import { IAuthFormData } from "@/types/auth.interface";

import { validEmail } from "./email.regex";

const AuthFields = () => {
	return (
		<>
			<Field<IAuthFormData>
				name="email"
				placeholder="Enter email"
				rules={{
					required: "Email is required",
					pattern: {
						value: validEmail,
						message: "Please enter a valid email address"
					}
				}}
				keyboardType="email-address"
				variant="primary"
			/>
			<Field<IAuthFormData>
				name="password"
				placeholder="Enter password"
				secureTextEntry	
				rules={{
					required: "Password is required",
					minLength: {
						value: 6,
						message: "Password should be minimum 6 characters long"
					},
					maxLength: {
						value: 20,
						message: "Password should be maximum 20 characters long"
					}
				}}
				variant="primary"
			/>
		</>
	);
};

export default AuthFields;

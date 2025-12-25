import axios from "axios";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";

import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/button/Button";

import { IAuthFormData } from "@/types/auth.interface";

import { API_URL } from "@/config/api.config";

import AuthFields from "./AuthFields";
import { useAuthMutation } from "./useAuthMutation";

const Auth = () => {
	const [isReg, setIsReg] = useState(false);

	const form = useForm<IAuthFormData>({
		mode: "onChange",
		defaultValues: {
			email: "",
			password: ""
		}
	});

	const { loginSync, registerSync, isLoading } = useAuthMutation(form.reset);

	const onSubmit: SubmitHandler<IAuthFormData> = async data => {
		if (isReg) {
			registerSync(data);
		} else {
			loginSync(data);
		}
	};

	return (
		<FormProvider {...form}>
			<View className="mx-2 items-center justify-center h-full">
				<View className="w-9/12">
					<Text className="text-center text-black text-3xl font-medium mb-8">
						{isReg ? "Sign Up" : "Login"}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields />
							<Button
								variant="primary"
								onPress={form.handleSubmit(onSubmit)}
								className="mt-3.5">
								{isReg ? "Sign Up" : "Login"}
							</Button>
							<Button
								className="mt-6 text-center"
								onPress={() => setIsReg(prev => !prev)}>
								{isReg
									? "Already have an account? "
									: "Don't have an account? "}
								<Text className="text-green">
									{isReg ? "Login" : "Sign up"}
								</Text>
							</Button>
						</>
					)}
				</View>
			</View>
		</FormProvider>
	);
};

export default Auth;

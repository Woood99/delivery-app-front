import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { UseFormReset, UseFormReturn } from "react-hook-form";

import { IAuthFormData } from "@/types/auth.interface";

import { AuthService } from "@/services/auth/auth.service";

import { useAuth } from "@/hooks";

export const useAuthMutation = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth();

	const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
		mutationKey: ["login"],
		mutationFn: ({ email, password }: IAuthFormData) => {
			return AuthService.main("login", email, password);
		},
		onSuccess: data => {
			setUser(data.user);
			reset();
		}
	});

	const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
		mutationKey: ["register"],
		mutationFn: ({ email, password }: IAuthFormData) => {
			return AuthService.main("reg", email, password);
		},
		onSuccess: data => {
			setUser(data.user);
			reset();
		}
	});

	const isLoading = isLoginLoading || isRegisterLoading;

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading
		}),
		[isLoading, loginSync, registerSync]
	);
};

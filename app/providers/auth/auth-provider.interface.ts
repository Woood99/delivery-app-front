import { Dispatch, SetStateAction } from "react";

import { IUser } from "@/types/user.interface";

export type TypeUserState = IUser | null;

export interface IAuthProvider {
	user: TypeUserState;
	setUser: Dispatch<SetStateAction<TypeUserState>>;
	logout: () => void;
}

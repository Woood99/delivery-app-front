import { IProduct } from "./product.inteface";

export interface IUser {
	id: string;
	name: string;
	avatarPath: string;
	favorites: IProduct[];
	email: string;
	password: string;
}

import { User } from "./User";

 

 export interface IUser {
	id: number;
	name: string;
	dateBirth: string;
	yearsOld: number;

	getUsuarioByEmail(email: string): string;
}

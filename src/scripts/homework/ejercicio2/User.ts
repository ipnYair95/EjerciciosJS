import { directory, users } from "./data2";
import { IUser } from "./IUser";

export class User implements IUser {
	id!: number;
	name!: string;
	dateBirth!: string;
	yearsOld!: number;

	constructor(){
		console.log("miau");
	}

	getUsuarioByEmail(email: string): string {
		let arr = [1,2];
		arr.forEach( a => console.log(a) );
		return "hola";
	}
}

import {User} from '../../index'; 

export interface IUser {
	id: number;
	name: string;
	dateBirth: string;
	yearsOld: number;

	getUsuarioByEmail(email: string): User;
}

export interface UserNormalize {
	id: number;
	name: string;
	dateBirth: string;
	yearsOld: number;
}

export interface UserResp {
	id: string;
	name: string;
	lastName: string;
	email: string;
	yearBirth: string;
	monthBirth: string;
	dayBirth: string;
	status: string;
}

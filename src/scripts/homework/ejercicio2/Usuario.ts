import { IUser } from './IUser';

export class Usuario implements IUser {
	_id: Number;
	_name: String;
	_dateBirth: String;
	_yearsOld: Number;

	get id(): Number {
		return this._id;
	}
	set id(id: Number) {
		this._id = id;
	}
	get name(): String {
		return this._name;
	}
	set name(name: String) {
		this._name = name;
	}
	get dateBirth(): String {
		return this._dateBirth;
	}
	set dateBirth(dateBirth: String) {
		this._dateBirth = dateBirth;
	}
	get yearsOld(): Number {
		return this._yearsOld;
	}
	set yearsOld(yearsOld: Number) {
		this._yearsOld = yearsOld;
	}
}

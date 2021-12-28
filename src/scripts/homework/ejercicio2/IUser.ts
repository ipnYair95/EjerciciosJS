
export interface IUser {
	_id: Number;
	_name: String;
	_dateBirth: String;
	_yearsOld: Number;

	get id();
	set id(id: Number);

	get name();
	set name(name: String);

	get dateBirth();
	set dateBirth(dateBirth: String);

	get yearsOld();
	set yearsOld(yearsOld: Number);
}

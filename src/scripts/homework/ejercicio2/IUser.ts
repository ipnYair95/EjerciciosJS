
export interface IUser {
	get id();
	set id(id: Number);

	get name();
	set name(name: String);

	get dateBirth();
	set dateBirth(dateBirth: String);

	get yearsOld();
	set yearsOld(yearsOld: Number);
}

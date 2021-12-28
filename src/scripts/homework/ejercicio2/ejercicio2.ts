import { IUser, UserNormalize, UserResp } from "./homework/ejercicio2/IUser";
import { directory, users } from "./homework/ejercicio2/data2";

/* Crear una clase llamada User que implemente una interface llamada IUser con una funcion que devuelva un objeto usuario.

La funcion debe tener las siguientes consideraciones.
* Recibir como parametro un correo.
* Buscar en la constante directory el correo y devolver el id.
* Con el id que se haya obtenido de la constante directory. Buscar en la constante users el usurio con ese mismo id.
* El objeto user debe contener los siguienres atributos
- id
- name. name + lastName
- dateBirth. en formato dd/mm/yyyy
- yearsOld. Calcular a partir de la fecha, del día, del mes y del año de nacimiento
 */

/*
    1) Creamos la clase que implementar a IUser donde getUsuarioByEmail es el metodo a implementar para inicializar sus atributos y retornar
        el objeto User o a si mismo;
    2) Validamos con un Regex que sea un email válido, si no es válido tiramos error
    3) Si es válido buscamos en el directorio el id correspondiente
    4) Si no lo encuentra tiramos error, si lo encuentra buscamos ahora en los usuarios
    5) Si no encuentra el usuario tiramos error, si lo encuentra enviamos los datos a normalizar a fin
        de tener sus propiedades de acuerdo a lo requerido
    6) Dentro de la normalización realizamos los ajustes correspondientes y retornarmos el obj 
    7) Con las propiedades obtenidas, inicializamos los atributos de la clase y retornamos la misma instancia o el usuario;
 */

export class User implements IUser {
	id!: number;
	name!: string;
	dateBirth!: string;
	yearsOld!: number;

	getUsuarioByEmail(email: string): User {
		//validamos si es un correo
		let emailValido = RegExp(
			`[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$`
		).test(email.toString());

		if (!emailValido) {
			throw new Error("Formato no válido del correo");
		}

		//buscamos el usuario por email, sino encuentra retornamos un objeto con id null para desestructurar
		const { id: idUser } = directory.find(
			(ele) => ele.email == email
		) || { id: null };

		if (idUser === null) {
			throw new Error(`No existe el usuario con correo ${email}`);
		}

		let userResp: UserResp | undefined = users.find(
			(ele) => ele.id == idUser
		);

		if (userResp === undefined) {
			throw new Error(`No existen datos para el usuario con id ${idUser}`);
		}

		const { id, name, dateBirth, yearsOld }: UserNormalize =
			normalizar(userResp!);

		this.id = id;
		this.name = name;
		this.dateBirth = dateBirth;
		this.yearsOld = yearsOld;

		return this;
	}
}

/**
 * Calcula la edad
 * @param nacimiento fecha de nacimiento en formato dd/mm/yyyy
 * @returns la edad en entero
 */
const getEdad = (nacimiento: String): number => {
	let dia = nacimiento.substring(0, 2);
	let mes = nacimiento.substring(3, 5);
	let anio = nacimiento.substring(6, 10);

	let actual = new Date();
    // formateamos codigo yyyy-mm-dd para poderlo comparar
	let fechaCompleta = new Date(`${anio}-${mes}-${dia}`);

	let edad = actual.getFullYear() - fechaCompleta.getFullYear();
	let m = actual.getMonth() - fechaCompleta.getMonth();

	// si paso o no ha pasado el mes o dia
	return m < 0 || (m === 0 && actual.getDate() < fechaCompleta.getDate())
		? --edad
		: edad;
};

/**
 * Convertimos el objeto a uno tipo Usuario con su edad y formato de fecha
 * @param param desestructuracion del objeto usuario
 * @returns objeto normalizado
 */
const normalizar = ({
	id: idUser,
	name: nameUser,
	lastName,
	yearBirth,
	monthBirth,
	dayBirth,
}: UserResp): UserNormalize => {
	const id = +idUser;
	const name = `${nameUser} ${lastName}`;
	const dateBirth = `${dayBirth}/${monthBirth}/${yearBirth}`;
	const yearsOld = getEdad(dateBirth);

	return { id, name, dateBirth, yearsOld };
};

//

try {
	let user = new User();
	console.log(user.getUsuarioByEmail("javier.hernandez@axity.com"));
} catch (error) {
	console.error(error);
}

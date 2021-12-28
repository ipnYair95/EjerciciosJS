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

import { Usuario } from './homework/ejercicio2/Usuario';
import { users, directory } from './homework/ejercicio2/data2';



/**
 * Calcula la edad
 * @param nacimiento fecha de nacimiento en formato dd/mm/yyyy 
 * @returns la edad en entero
 */
const getEdad = (nacimiento: String) : Number => {
    
    let dia = nacimiento.substring(0, 2);
    let mes = nacimiento.substring(3, 5);
    let anio = nacimiento.substring(6, 10);  
   
    let actual = new Date();  
    let fechaCompleta = new Date( `${anio}-${mes}-${dia}` );
    
    let edad = actual.getFullYear() - fechaCompleta.getFullYear();
    let m = actual.getMonth() - fechaCompleta.getMonth();
  
	// si paso o no ha pasado el mes o dia
    return  ( (  m < 0 || (m === 0 && actual.getDate() < fechaCompleta.getDate()) ) ? --edad : edad );
};

/**
 * Convertimos el objeto a uno tipo Usuario con su edad y formato de fecha
 * @param param desestructuracion del objeto usuario
 * @returns usuario normalizado
 */
const normalizar = ({id,name,lastName,yearBirth,monthBirth,dayBirth}) : Usuario =>{

    let user = new Usuario();
    user.id = id;
    user.name = `${name} ${lastName}`;
    user.dateBirth = `${dayBirth}/${monthBirth}/${yearBirth}`;
    user.yearsOld = getEdad( user.dateBirth );
    
    return user;   
};

/**
 * Retorna un objeto del tipo usuario
 * @param email email para buscar
 * @returns el usuario normalizado a la clase Usuario o nulo si no lo encuentra
 */
const getUserByEmail = ( email: String ) : Usuario =>{

    let emailValido = RegExp(`[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$`).test(email.toString());

    if(!emailValido){
        throw new Error("Formando no válido del correo");
    }

    //buscamos el usuario por email, sino encuentra retornamos un objeto con id null para desestructurar
    const {id} = directory.find( ele => ele.email == email ) || {id: null};

    if( id === null ){
        return null;
    }

    const userById = users.find( ele => ele.id == id );
    return normalizar(userById);
};

try {
	let email = "francisco.hernandez@axity.com";
	let usuario = getUserByEmail(email);	
	console.log(  usuario || "No existe" );
} catch (error) {
	console.warn(error);
}




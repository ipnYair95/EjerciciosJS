"use strict";
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
exports.__esModule = true;
var Usuario_1 = require("./homework/ejercicio2/Usuario");
var data2_1 = require("./homework/ejercicio2/data2");
/**
 * Calcula la edad
 * @param nacimiento fecha de nacimiento en formato dd/mm/yyyy
 * @returns la edad en entero
 */
var getEdad = function (nacimiento) {
    var dia = nacimiento.substring(0, 2);
    var mes = nacimiento.substring(3, 5);
    var anio = nacimiento.substring(6, 10);
    var actual = new Date();
    var fechaCompleta = new Date(anio + "-" + mes + "-" + dia);
    var edad = actual.getFullYear() - fechaCompleta.getFullYear();
    var m = actual.getMonth() - fechaCompleta.getMonth();
    // si paso o no ha pasado el mes o dia
    return ((m < 0 || (m === 0 && actual.getDate() < fechaCompleta.getDate())) ? --edad : edad);
};
/**
 * Convertimos el objeto a uno tipo Usuario con su edad y formato de fecha
 * @param param desestructuracion del objeto usuario
 * @returns usuario normalizado
 */
var normalizar = function (_a) {
    var id = _a.id, name = _a.name, lastName = _a.lastName, yearBirth = _a.yearBirth, monthBirth = _a.monthBirth, dayBirth = _a.dayBirth;
    var user = new Usuario_1.Usuario();
    user.id = id;
    user.name = name + " " + lastName;
    user.dateBirth = dayBirth + "/" + monthBirth + "/" + yearBirth;
    user.yearsOld = getEdad(user.dateBirth);
    return user;
};
/**
 * Retorna un objeto del tipo usuario
 * @param email email para buscar
 * @returns el usuario normalizado a la clase Usuario o nulo si no lo encuentra
 */
var getUserByEmail = function (email) {
    var emailValido = RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$").test(email.toString());
    if (!emailValido) {
        throw new Error("Formando no válido del correo");
    }
    //buscamos el usuario por email, sino encuentra retornamos un objeto con id null para desestructurar
    var id = (data2_1.directory.find(function (ele) { return ele.email == email; }) || { id: null }).id;
    if (id === null) {
        return null;
    }
    var userById = data2_1.users.find(function (ele) { return ele.id == id; });
    return normalizar(userById);
};
try {
    var email = "francisco.hernandez@axity.com";
    var usuario = getUserByEmail(email);
    console.log(usuario || "No existe");
}
catch (error) {
    console.warn(error);
}

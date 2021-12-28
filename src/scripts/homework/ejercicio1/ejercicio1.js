"use strict";

import { Corrida } from "./homework/ejercicio1/Corrida";
import { corridasWeb } from "./homework/ejercicio1/data";

/*
Crear una funcion que reciba como parametros empresa y descripcion de servicio.

* La funcion debe buscar en la constante corridasWeb las corridas que coincidan con los parametros enviados en la función.
* El parametro empresa debe ser opcional y en caso de no enviarlo asignar como default el valor "AEF"
* La funcion debe regresar un arreglo de objetos de tipo corrida con los siguientes atributos.
    - numeroCorrida. String
    - descripcionServicio. String
    - empresa. String
    - descripcionEmpresa: String
    - tienePromoción. Boolean. Deberá ir en true en caso de que una de las corridas web tenga lista de descuetos "listaDescuentos"
 
* En caso de no encontrar corridas, regresar un error con el mensaje "No hay corridas disponibles" */

 
/* 
    1) Mandamos los valores para empresa y servicio en el metodo, en caso de no mandar "empresa" por default es AEF
    2) Para consumir la constante corridas, se podría usar una Promise pero como no vamos a consumir un API no lo veo necesario
        Usamos filter para obtener solamente los objs que cumplan los criterios
         -> En caso de no existir algun objeto que cumpla mandamos como error que no hay corridas disponibles
         -> Si existe, normalizamos los datos parseCorrida() para usarlos con la Clase Corrida. Como requerimos de retornar un arreglo de la 
            clase Corrida usamos el map para transformar un obj a una instancia de Corrida
    3) Validamos si tiene o no listas de descuentos para asignarla al atributo de la clase
    4) Desestructuramos el obj con las propiedades que solamente usaremos
    5) Creamos la instancia y retornamos la clase con las propiedades que requerimos solamente para el map
    6) Una vez obtenido el arreglo de tipo Corrida podemos usarlo, en este caso usamos imprimir
    7) Usamos un forEach y desestructuracion para leer cada propiedad del obj y por ultimo concatenamos con templateString
        lo que queremos saber.
*/

/**
 * Función para retornar un nuevo arreglo del tipo corrida
 * @param descripcionServicio tipo del servicio
 * @param empresa nombre de la empresa, si no se provee por default es AEF
 * @returns arreglo
 */
const parseCorrida = (obj) => {
	// si tiene o no lista de descuentos
	const tienePromocion = obj.listaDescuentos ? true : false;
	//desestructuracion para crear el objeto corrida y retornarlo
	const {
		numeroCorrida,
		descripcionServicio,
		empresa,
		descripcionEmpresa,
	} = obj;
	return new Corrida(
		numeroCorrida,
		descripcionServicio,
		empresa,
		descripcionEmpresa,
		tienePromocion
	);
};


/**
 *
 * @param arr Arreglo filtrado del tipo Corridas
 */
const imprimir = (arr) => {
	//Recorremos el array mostrando información
	arr.forEach(
		({
			numeroCorrida,
			descripcionServicio,
			empresa,
			descripcionEmpresa,
			tienePromocion,
		}) => {
			const cadena = ` La empresa ${empresa} - ${descripcionEmpresa} tiene el servicio de ${descripcionServicio} con # corrida ${numeroCorrida}, además ${tienePromocion ? "SI" : "NO"} tiene promoción `;
			console.log(cadena);
		}
	);
};

const buscar = (descripcionServicio, empresa = "AEF") => {
	// Filtramos de acuerdo a los criterios
	let filtrado = corridasWeb.filter(
		(ele) =>
			ele.empresa === empresa &&
			ele.descripcionServicio === descripcionServicio
	);
	// Si no existe, mandamos error
	if (filtrado.length === 0) {
		throw new Error(`No hay corridas disponibles`);
	}
	// Si existe empleamos un map para retornar un nuevo arreglo;
	return filtrado.map((ele) => parseCorrida(ele));
};


//////////////////////////////////////////
let empresa = "TCH";
let descripcionServicio = "PRIMERA SELECT";
try {
	let arr = buscar(descripcionServicio,empresa);
	imprimir(arr);
} catch (error) {
	console.error(error);
}

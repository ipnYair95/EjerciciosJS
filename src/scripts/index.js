"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.creado = new Date();
    }
    return Cliente;
}());
var clienteObj = {
    nombre: 'Ricardo',
    direccion: 'Limons 3',
    creado: new Date
};
console.log(clienteObj);

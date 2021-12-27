class Inmueble {
    get direccion() {
        return this._direccion;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }

    get referencia() {
        return this._referencia;
    }

    set referencia(referencia) {
        this._referencia = referencia;
    }

}
class Casa extends Inmueble {
    constructor(numHabitaciones, tienePatio, tieneCochera) {
        super();
        this._numHabitaciones = numHabitaciones;
        this._tienePatio = tienePatio;
        this._tieneCochera = tieneCochera;
    }

    esGrande() {
        return this._tienePatio && this._tieneCochera ? true : false;
    }

    set color(x) {
        this._color = x;
    }

    get color() {
        return this._color;
    }


    static saludo() {
        return `Bienvenido`;
    }

}


let miCasa = new Casa(3, true, true);
miCasa.direccion = "Av Gonzalez";
miCasa.referencia = "Tienda";
console.log(miCasa);


//clase Perro

class Perro {
    constructor(color, complexion) {
        this._color = color;
        this._complexion = complexion;
    }

    get color() {
        return this._color;
    }
    get complexion() {
        return this._complexion;
    }

    set color(color) {
        this._color = color;
    }
    set complexion(complexion) {
        this._complexion = complexion;
    }

}

class Raza extends Perro {    

    constructor(color, complexion, tamanio){
        super(color, complexion);
        this._tamanio = tamanio;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    esAgresivo(raza) {
        return raza === 'rottweiler' ? true : false;
    }

}

let perro = new Raza('Negro', 'Gordo', 'Grande');
let perro2 = new Raza('Blanco', 'Medio', 'Pequeño');

console.log(perro);
console.log(` El perro rottweiler ${ perro.esAgresivo('rottweiler') ? 'Si' : 'No'  } es agresivo `);

console.log(perro2);
console.log(` El perro french ${ perro.esAgresivo('french') ? 'Si' : 'No'  } es agresivo `);
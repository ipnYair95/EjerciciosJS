
class Casa {
    constructor(numHabitaciones, tienePatio, tieneCochera) {
        this._numHabitaciones = numHabitaciones;
        this._tienePatio = tienePatio;
        this._tieneCochera = tieneCochera;
    }

    esGrande(){
        return this._tienePatio && this._tieneCochera ? true : false;
    }

    set color(x){
        this._color = x;
    }

    get color(){
        return this._color;
    }


    static saludo(){
        return `Bienvenido`;
    }

}

let miCasa = new Casa(3, true, true);
console.log(miCasa);
console.log(miCasa.esGrande());
miCasa.color = 'Blanco';
console.log(`Mi casa ${ miCasa.esGrande() ? 'Si' : 'No' } es grande`);
console.log(Casa.saludo());
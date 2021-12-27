import { ClienteInterface, ClienteObjectInterface } from './interfaces';


class Cliente implements ClienteInterface{

    public creado: Date;
    
    constructor(public nombre: string, public direccion: string){
        this.creado = new Date();
    }
}

let clienteObj: ClienteObjectInterface = {
    nombre: 'Ricardo',
    direccion: 'Limons 3',
    creado: new Date
}

console.log(clienteObj);
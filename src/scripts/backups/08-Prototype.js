{
    function Home(name, address) {
        this._address = address;
        this._name = name;
    }

    const miCasa = new Home('Ricado', 'Hidalgo');
    const miOtraCasa = new Home('Esteban', 'Puebla');

    console.log('Casa', miCasa);
    console.log('Mi otra', miOtraCasa);

    console.log(miCasa.__proto__ === miOtraCasa.__proto__);

    function Persona(name, age) {

        this._name = name;
        this._age = age;
    }

    Persona.prototype.interest = ['VerTv', 'Jugar'];
    Persona.prototype.getEdad = function(){
        return `${this._name} tiene ${this._age}`;
    };

    const ricardo = new Persona('Ricardo', 18);
    const valeria = new Persona('Valeria', 20);

    ricardo.interest.push('otra cosa');

    console.log(ricardo);
    console.log(valeria);
    console.log(valeria.getEdad());


}
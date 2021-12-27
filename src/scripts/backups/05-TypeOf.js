let miFuncion = new Function('5+2');
let nombre =  'Ridcaro';
let edad = 19;
let hoy = new Date();


console.log(typeof miFuncion);
console.log(typeof nombre);
console.log(typeof edad === 'number' ? 'Si' : 'No' );
console.log(typeof hoy  === 'function' );

const gato = {
    nombre: 'gato',
    edad: 1
}

if( typeof gato.nombre === 'string' ){
    console.log("El atributo es string");
}else{
    console.log("no es string");
}

if(typeof gato.edad === 'number'){
    console.log("El atributo es numero");
}else{
    console.log("no es numero");
}
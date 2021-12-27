
//recorre
let arr = [10,20,30,40];
let copiaArreglo = [];
arr.forEach( v => {
    copiaArreglo.push(v);
});

console.log(copiaArreglo);


//filtra a condicion
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//que todos cumplan algo
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

let valorEvery = array1.every( v => {
    return typeof v === 'number'
});

console.log(valorEvery);

//transformar y retornar un arreglo modificado
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});

console.log(doubles);

//funcion reductora para devovler un valor
const array2 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array2.reduce(reducer));

console.log(array2.reduce(reducer, 5));

{
    const iva = 1.16;
    let facturas = [
        {precio: 23, cantidad: 1},
        {precio: 19, cantidad: 2},
        {precio: 14, cantidad: 4},
        {precio: 22, cantidad: 1}
    ];

    let arrIva = facturas.map( ele =>{
        let suma = ele.precio * ele.cantidad;
        return suma * iva;
    });

    let total = arrIva.reduce( (a,b) => a+b);

    console.log(arrIva);
    console.log(total);

}








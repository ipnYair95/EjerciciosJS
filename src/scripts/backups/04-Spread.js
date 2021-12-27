
{
    let antes = Math.max(1, 2, 3);
    console.log(antes);

    let arr = [1, 2, 3];
    let ahora = Math.max(...arr);
    console.log(ahora);

    let array1 = [1, -1, -3, -4];
    let array2 = [8, 3, -8, -1];

    console.log(Math.max(...array1, 2, ...array2));

    let arr3 = [3,5,1];
    let arr4 = [3,9,15];
    let merge = [...arr3,...arr4];
    console.log(merge);


}

{
    let comida = ['comida','pollo'];
    let masComida = ['Manzana', ...comida, 'Kiwi'];
    console.log(masComida);    
}

{
    const gato = {
        nombre: 'gato',
        edad: 1
    }

    const otroGato = {...gato};
    otroGato.nombre = "Michis";

    console.log(gato,otroGato);

}

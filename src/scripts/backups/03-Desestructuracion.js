
{
    let arreglo = [1, 2, 3];
    const [a, , c] = arreglo;
    console.log(a, c);
}

{
    let arr2 = [1, 2, 3];
    const [a, b, c, d = 4] = arr2;

    console.log(a, b, c, d);
}

{
    let persona = {
        nombre: 'Jhon',
        apellido: 'Doe',
        otroApellido: 'Ariaz'
    };

    console.log(persona.nombre);
    const { nombre, apellido, otroApellido, domicilio = 'Calle' } = persona;
    console.log(`${nombre} ${apellido} ${otroApellido} ${domicilio}`);

}

{
    let persona = {
        nombre: 'Jhon',
        apellido: 'Doe',
        otroApellido: 'Ariaz',
        domicilio: {
            calle: 'Duraznos',
            numero: '17'
        }
    };

    const { domicilio: { calle } } = persona;
    console.log(calle);
    const { domicilio } = persona;
    console.log(domicilio);

}


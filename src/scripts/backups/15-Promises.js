

let x = 5;
const promise = new Promise((resolve, reject) => {
	if (x === 10) {
		resolve(`La variable es igual a ${x}`);
	} else {
		reject(`La variable tiene que ser igual a 10`);
	}
});


promise
	.then(resp => console.log(resp))
	.catch(error => console.log(error));


let y = 5;
console.log(`Proceso se ha iniciado`);

setTimeout(() => {
	y *= 2;
	console.log(`Proceso ha terminado`);
}, 2000);

console.log(`El resultado es: ${y}`);

let num = 10;
console.log("Iniciado");

const promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		num *= 2;
		resolve(num);
	}, 2000);
});

promesa.then(resp => {
	console.log(num);
});


let usuarios = [
	{
		id: 1,
		nombre: 'Jhon'
	},
	{
		id: 2,
		nombre: 'Pepe'
	}
]

let telefonos = [
	{
		id: 1,
		telefono: 2222323,
	},
	{
		id: 2,
		telefono: 2323243
	}
]


const obtenerUsuarios = (id) => {
	return new Promise((resolve, reject) => {
		if (usuarios.find(v => id === v.id)) {
			resolve(obtenerTelefono(id));
		} else {
			reject("El usuario no existe");
		}
	});
};

const obtenerTelefono = (id) => {
	return new Promise((resolve, reject) => {
		if (telefonos.find(v => id === v.id)) {
			resolve(`El telefono existe`);
		} else {
			reject("El telefono no existe");
		}
	});
};


obtenerUsuarios(1)
	.then(resp => {
		return resp
	})
	.then(msg => console.log(msg))
	.catch(error => console.log(error) );

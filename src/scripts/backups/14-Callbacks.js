function imprimeMensaje(mensaje){
	console.log(`El mensaje es: ${mensaje}`);
};

function ejemploCallback(a,b, callback){
	let suma = a+b; 
	callback( `El resultado de suma es : ${suma}` );
}

ejemploCallback(1,2,imprimeMensaje);

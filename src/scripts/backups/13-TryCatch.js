
try {
	console.log("hace");
	throw new Error("ocurrio un error");
} catch (error) {
	console.error(error);
}

try {
	console.log("try 1");
	//algo();
	console.log("try 2");
} catch (error) {
	if( error instanceof ReferenceError ){
		console.error("Funcion no declarada");
	}else{
		console.error(error);
	}
}finally{
	console.log("finally");
}


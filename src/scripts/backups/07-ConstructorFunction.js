

function testConstructor(){
    const suma = new Function('a','b','return a+b');
    console.log(suma(2,6));
    
}

testConstructor();
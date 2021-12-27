

function miFuncion(a,b, ...masParametros){
    console.log(a);
    console.log(b);
    masParametros.forEach( ele => console.log(ele) );
};

miFuncion(1,2,3,4,5,6);


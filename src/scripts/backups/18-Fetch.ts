/* 
async function getNombre(username: string){ 
    const url = `https://api.github.com/users/${username}`;
    let resp = await fetch(url);
    const json = await resp.json();
    console.log(json);
}

async function otraFuncion(){
    console.log("1  inicio");
    await getNombre('rj4forever');
    console.log("2 fin");
}

otraFuncion();


 */
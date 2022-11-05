const {info} =require('console');
const fs = require('fs');
fs.writeFileSync('archivo.txt', "hola, este es un archivo nuevo, creado de manera sincronica");
fs.writeFile('archivo2.txt', "hola, este es un archivo nuevo, creado de manera asincronica", (error) =>{
    if (err)
        console.log(err);
    else{
    }
});

let informacion = fs.readFileSync('info.txt','utf8');
console.log(informacion);
fs.unlinkSync('archivo.txt');
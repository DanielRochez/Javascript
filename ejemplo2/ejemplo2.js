console.log("Esto es un mensaje en el log");
console.error("Esto es un error");
console.info("Añade información a la consola");
console.warn("Envia un aviso");

const gente = [
    {nombre: 'Daniel',edad: 25},
    {nombre: 'Alejandro',edad: 30},
    {nombre: 'Sofia',edad: 28},
];
console.table(gente);
gente.forEach((persona,index) =>{
    console.groupCollapsed(`${persona.nombre}`);
    console.log(persona.edad);
    console.log("hola");
    console.groupEnd(`${persona.nombre}`);
});
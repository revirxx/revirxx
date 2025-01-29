
/*
Arrays: Es una variable que contiene distintos valores
Algoritmo
Estructura de datos


*/

//ZONA SEGURA

document.addEventListener("DOMContentLoaded", function(){
    const frutas = ["manzana", "limon", "piña", "mamón"];
    const verduras = ["zapallo", "apio", "locote"];
    const personas1 = ["Jose", "Marciana", "Pablo", "Canabbis"];
    const vero = {
        nombre: "Veronica Belén"
        , apellido: "Vera Irala"
        , edad: null
    };
    const ale = {
        nombre: "Alexis"
        , apellido: "Aguilera"
        , edad: 29
    };
    const george = {
        nombre:"Jorge"
        , apellido: "Acuña"
        , edad: 28
    };

    const personas = [vero, ale];
    console.log (personas);
    personas.push(george);
    console.log (personas);

    console.log(frutas);
    console.log(verduras);
    console.log(personas);

    console.log(frutas.length);
    console.log(personas [2]);
    console.log(frutas);
    console.log(frutas.length);
    console.log(frutas[frutas.length -1]);
    frutas.push ("piña");
    console.log(frutas);
    frutas.push("piña");

    
    // length es la cantidad de elementos
    // para encontrar un elemento conocido se usa la []
});

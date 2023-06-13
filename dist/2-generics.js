"use strict";
function obtenerPrimerElemento(array) {
    if (array.length > 0) {
        return array[0];
    }
    return undefined;
}
const numeros = [88, 2, 3, 4, 5, 6];
const primerNumero = obtenerPrimerElemento(numeros);
console.log(primerNumero);
const palabras = ["hola", "8"];
const primerPalabra = obtenerPrimerElemento(palabras);
console.log(primerPalabra);
const otracosa = [{ uno: 1 }, "hola", 99];
const primerElementoOtraCosa = obtenerPrimerElemento(otracosa);
console.log(primerElementoOtraCosa);

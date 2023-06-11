"use strict";
let persona = {
    nombre: "messi",
    edad: 35
};
let calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    }
};
console.log(calculadora.sumar(6, 5));
console.log(calculadora.restar(9, 7));
class GoldenRetriver {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonido() {
        console.log("woof");
    }
    ladrar() {
        console.log("guau guau");
    }
}
let perro = new GoldenRetriver("Max");
perro.ladrar();
perro.sonido();
console.log(perro.nombre);
let puntos = [
    { x: 0, y: 0 },
    { x: 6, y: 2 },
    { x: 1, y: 9 }
];
console.log(puntos);
//# sourceMappingURL=3interfaces.js.map
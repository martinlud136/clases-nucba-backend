"use strict";
const punto = {
    x: 88,
    y: 99,
    color: "azul"
};
console.log(punto);
class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log(`${this.nombre} esta comiendo`);
    }
    jugar() {
        console.log(`${this.nombre} esta jugando`);
    }
}
const miPerro = new Perro("max");
miPerro.jugar();
miPerro.comer();
const miPerro2 = new Perro("max-recargado");
miPerro2.jugar();
miPerro2.comer();

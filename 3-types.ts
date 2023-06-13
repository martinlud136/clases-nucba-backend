type Coordenadas = {
    x: number;
    y: number
}

type Color = "rojo" | "verde" | "azul"

type ColorDePunto = {
    color: Color
}

type Punto = Coordenadas & ColorDePunto

const punto: Punto = {
    x: 88,
    y: 99,
    color: "azul"
}

console.log(punto)

interface Animal {
    nombre: string;
    comer():void
}

interface Mascota extends Animal {
    jugar():void
}

class Perro implements Mascota {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre
    }

    comer(): void {
        console.log(`${this.nombre} esta comiendo`)
    }    
    jugar(): void {
        console.log(`${this.nombre} esta jugando`)
    }
}

const miPerro = new Perro("max")
miPerro.jugar()
miPerro.comer()
const miPerro2 = new Perro("max-recargado")
miPerro2.jugar()
miPerro2.comer()




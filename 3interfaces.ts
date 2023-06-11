
interface Persona {
    nombre: string;
    edad: number;
}

let persona: Persona = {
    nombre: "messi",
    edad: 35
}

// console.log(persona.nombre)
// console.log(persona.edad)

interface Calculadora {
    sumar(a:number, b:number):number;
    restar(a:number, b:number):number
}

let calculadora: Calculadora = {
    sumar(a,b){
        return a+b
    },
    restar(a,b){
        return a-b
    }
}

console.log(calculadora.sumar(6,5))
console.log(calculadora.restar(9,7))

interface Animal {
    nombre: string;
    sonido():void;
}

interface Perro extends Animal{
    ladrar():void;
}

class GoldenRetriver implements Perro{
    constructor(nombre: string){
        this.nombre = nombre
    }
    nombre: string;

    sonido(): void {
     console.log("woof")   
    }

    ladrar(): void {
        console.log("guau guau")
    }
}

let perro: Perro = new GoldenRetriver("Max")

perro.ladrar()
perro.sonido()
console.log(perro.nombre)

interface Punto {
    x:number
    y:number;
}

let puntos: Punto[] = [
    {x:0 ,y :0},
    {x:6 ,y :2},
    {x:1 ,y :9}
]

console.log(puntos)
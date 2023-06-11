
let edad: number = 25
let nombre: string = "juan"
let esMayorDeEdad: boolean = true

console.log(edad)
console.log(nombre)
console.log(esMayorDeEdad)

function saludar(nombre: string):void {
    console.log(`Hola ${nombre}`)
}

saludar("nucba")

function sumar(a:number, b:number):number{
    return a + b
}

let resultado: number = sumar(54,6)
console.log(resultado)

let numeros: number[]= [15,6,99,6]
let nombres: string[]= ["hola", "52", "boca"]

console.log(numeros)
console.log(nombres)
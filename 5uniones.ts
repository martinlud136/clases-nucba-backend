export let edad: number | string

edad = 25
// console.log(edad)

edad = "treinta"
// console.log(edad)

function imprimirId(id: number | string){
    console.log(`ID: ${id}`)
}

imprimirId(100)
imprimirId("3156asdf")

function obtenerResultado():number | string {
    return Math.random() < 0.5 ? 10 : "error"
}

let resultado = obtenerResultado()
console.log(resultado)



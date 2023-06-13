function obtenerPrimerElemento<T>(array: T[]): T | undefined{
    if(array.length > 0){
        return array[0]
    }
    return undefined
}    

const numeros: number[] = [88,2,3,4,5,6] 
const primerNumero: number | undefined = obtenerPrimerElemento(numeros)

console.log(primerNumero)

const palabras: string[] = ["hola", "8"]
const primerPalabra: string | undefined = obtenerPrimerElemento(palabras)

console.log(primerPalabra)

const otracosa: ({}| string | number)[] = [{uno:1}, "hola", 99]
const primerElementoOtraCosa: ({}|string|number|undefined) = obtenerPrimerElemento(otracosa) 

console.log(primerElementoOtraCosa)
const sumar = (a:number, b:number): number => a + b

console.log(sumar(4,5))

const objeto = {
    nombre: "juan",
    saludar: ()=>{
        console.log(`Hola soy ${this.nombre}`)
    }
}

objeto.saludar()
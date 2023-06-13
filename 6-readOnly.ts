interface Comida {
   readonly nombre: string;
   readonly origen: string;
   readonly ingredientes: string[]
}

const comida: Comida = {
    nombre: "pizza",
    origen: "italia",
    ingredientes: ["masa","salsa","queso","anana"]
}

comida.nombre = "lasagna"

console.log(comida)
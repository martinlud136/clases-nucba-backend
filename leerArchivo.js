let fs = require("fs")

//leer archivos sincronicamente

let contenido = fs.readFileSync("./archivoSync.txt", "utf-8")

console.log(contenido)

//leer archivos asincronicamente

fs.readFile("./archivoSync.txt", "utf-8", function(error, contenido){
    if(error){
        throw error
    }
    console.log("El contenido es: " + contenido)
})
console.log("leyendo contenido")
let fs = require("fs")

const texto = "escribimos archivo asincronicamente"

fs.writeFile("archivo.txt", texto, function(error){
    if(error){
        throw error
    }
    console.log("Se creo el archivo correctamente")
})
console.log("comenzando a escribir el archivo")

const textoSync = "Escribimos un archivo sincronicamente"
fs.writeFileSync("archivoSync.txt", textoSync)

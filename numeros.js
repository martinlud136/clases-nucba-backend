process.stdout.write("Escriba una lista de numeros para sumar. '.' para terminar \n")

let suma = 0

 process.stdin.on("data", function(data){

    if(data.toString().trim() === "."){
        process.exit()
    }
    suma += parseInt(data.toString().trim())
 })

 process.on("exit",function(){
    process.stdout.write(`La suma total ingresada es: ${suma} \n`)
 })
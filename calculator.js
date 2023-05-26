let sumarYrestar = {
    sumar: (numeroUno, numeroDos)=>{
        return numeroUno + numeroDos
    },
    restar: (numeroUno, numeroDos) =>{
        return numeroUno - numeroDos
    }
}

const multiplicarPorDos = (numero) =>{
    return numero * 2
}


module.exports = {
    sumasYRestas :sumarYrestar,
    multiplicar: multiplicarPorDos,
}

// exports.sumarExport = function(numeroUno,numeroDos){
//     return numeroUno + numeroDos 
// }

// exports.restarExport = function(numeroUno, numeroDos){
//     return numeroUno - numeroDos
// }
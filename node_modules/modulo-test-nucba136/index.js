const sumarYrestar  = {
    sumar: (numeroUno, numeroDos) =>{
        return numeroUno + numeroDos
    },
    restar: (numeroUno, numeroDos)=>{
        return numeroUno - numeroDos
    }
}

const multiplicarPorDos = (numero)=>{
    return numero * 2
}

module.exports = {sumarYrestar,multiplicarPorDos}

// exports.sumar = function(numerouno, numeroDos) {
//     return numerouno + numeroDos
// }

// exports.restar = function(numerouno, numeroDos) {
//     return numerouno - numeroDos
// }
// exports.multiplicarPorTres = function(numero) {
//     return numero * 3
// }

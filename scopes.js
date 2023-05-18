//antes del 2015 javascrip solo tenia scope global y scope de funcion
//ES6(2015) introdujo nuevas keywords let y const
//estas dos variables proporcionan block scope

var vGlobal = "keyword var con scope global"

let lGlobal = "keyword let con scope global"

const cGlobal = "keyword const con scope global"

// console.log(vGlobal)
// console.log(lGlobal)
// console.log(cGlobal)

function myFunc () {
    //variables declaradas en contexto de funcion solo pueden ser accedidas dentro de la funcion 
    var vScope = "var declarada en contexto de funcion"
    let lScope = "let declarada en contexto de funcion"
    const cScope = "const declarada en contexto de funcion"

    // console.log(vScope)
    // console.log(lScope)
    // console.log(cScope)
}
myFunc()

// console.log(vScope)

//variable con var se puede reasignar
var miVariableUnica = "hola mundo"
var miVariableUnica = "chau"

//la variable declarada con let y const no se puede reasignar, son unicas
let miVariableLet = "hola"
// let miVariableLet = 

let arr = []

for(var i = 0; i <5 ; i++){
    var numero = i
    arr.push(numero)
}

if(true){
    var x = 3
}
console.log(numero)





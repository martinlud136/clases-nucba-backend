const jugadores = [
  { id: 1, nombre: "Messi", logros: 395 },
  { id: 2, nombre: "Jennifer Hermoso", logros: 234 },
  { id: 3, nombre: "Maradona", logros: 455 },
  { id: 4, nombre: "Alexia putellas", logros: 356 },
  { id: 5, nombre: "Cristiano Ronaldo", logros: 67 },
  { id: 6, nombre: "Lieke Martens", logros: 68 },
];


let scoreTotal = 0;

//una variante con for
for (let i = 0; i < jugadores.length; i++){
    console.log(i)
    scoreTotal = scoreTotal + jugadores[i].logros
    //tambien se puede hacer con esta notacion
    //scoreTotal += jugadores[i].logros 
}
//variante con forEach
// jugadores.forEach(jugador =>{
//     return scoreTotal += jugador.logros
// })

//variante con reduce
let scoreReduce = jugadores.reduce((acc, jugadores)=>{
return acc + jugadores.logros
},0)

//variante con map
// let queDevuelve = jugadores.map(jugador =>{
//     return scoreTotal += jugador.logros
// })
console.log({scoreReduce})
console.log({scoreTotal})



const calcularScorePromedio = (jugadores) =>{
    let scoreTotal = 0;
    let scorePromedio = 0

    for(let i = 0 ; i < jugadores.length ; i++){
        scoreTotal += jugadores[i].logros
    }
    scorePromedio = scoreTotal / jugadores.length
    return scorePromedio
}

console.log(calcularScorePromedio(jugadores))

const obtenerJugadorConMenorScore = (jugadores) =>{
    let menorScore = Infinity
    let jugadorConMenorScore= null
    for (let i = 0 ; i < jugadores.length ; i++){
        if(jugadores[i].logros < menorScore){
            menorScore = jugadores[i].logros
            jugadorConMenorScore = jugadores[i]
        }
    }
    return jugadorConMenorScore
}

console.log(obtenerJugadorConMenorScore(jugadores))

const obtenerJugadorConMayorScore = (jugadores) =>{
    let mayorScore = -Infinity
    let jugadorConMayorScore= null
    for (let i = 0 ; i < jugadores.length ; i++){
        if(jugadores[i].logros > mayorScore){
            mayorScore = jugadores[i].logros
            jugadorConMayorScore = jugadores[i]
        }
    }
  
    return jugadorConMayorScore
}

console.log(obtenerJugadorConMayorScore(jugadores))

const obtenerJugadoresSeparadosPorString = (jugadores) =>{
    let stringJugadores = ""

    jugadores.forEach(jugador =>{
        stringJugadores += `${jugador.nombre}, `
    })
    return stringJugadores
}

console.log(obtenerJugadoresSeparadosPorString(jugadores))
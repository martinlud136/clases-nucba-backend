interface Jugador {
    nombre: string
    edad: number
    posicion: string;
    equipo: string;
    nacionalidad: string;
}

type Infojugador = Omit<Jugador, "equipo" | "posicion">

const jugador: Infojugador = {
    nombre: "messi",
    edad: 35,
    nacionalidad: "argentino",
}

console.log(jugador)
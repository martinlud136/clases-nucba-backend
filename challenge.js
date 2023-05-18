class Jugador {
    constructor(nombre, apellido, clubes, logros){
        this.nombre = nombre
        this.apellido = apellido
        this.clubes = clubes
        this.logros = logros
    }
}

let maradona = new Jugador("diego", "maradona")

maradona.clubes = {
    argentina:["boca","newells", "argentinos juniors"],
    italia: ["napoli"]
}

maradona.logros = ["campeon del mundo", "mundial sub 20", "copa del rey" ]

console.log(maradona)
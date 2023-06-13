interface Auto {
    marca?:string;
    modelo?:string;
    puertas?: number;
}

function crearAuto(auto: Required<Auto>): void{
    console.log(auto)
}

const auto: Required<Auto> = {
    marca: "Ford",
    modelo: "mustang",
    puertas: 2
}
crearAuto(auto)
interface Persona {
    nombre:string;
    edad: number;
    direccion: string
}

function actualizarPersona(persona: Persona, cambios: Partial<Persona>): Persona{
    return {...persona, ...cambios}
}

const persona: Persona = {
    nombre: "juan",
    edad: 33,
    direccion: "calle 2"
}

const cambios: Partial<Persona> = {
    nombre: "carlos"
}

const personaActualizada = actualizarPersona(persona, cambios)
console.log(personaActualizada)

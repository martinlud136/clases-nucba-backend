"use strict";
function actualizarPersona(persona, cambios) {
    return Object.assign(Object.assign({}, persona), cambios);
}
const persona = {
    nombre: "juan",
    edad: 33,
    direccion: "calle 2"
};
const cambios = {
    nombre: "carlos"
};
const personaActualizada = actualizarPersona(persona, cambios);
console.log(personaActualizada);

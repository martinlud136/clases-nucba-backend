"use strict";
function imprimirInformacion(valor) {
    if (typeof valor === "string") {
        console.log("el valor es : " + valor);
    }
    else if (typeof valor === "number") {
        console.log("el valor del numero es: " + valor);
    }
    else {
        console.log("El valor es tipo desconocido");
    }
}
imprimirInformacion("hola");
imprimirInformacion("hola");
imprimirInformacion("hola");
//# sourceMappingURL=6typof.js.map
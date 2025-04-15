const leer = require("prompt-sync")();

function main() {
    let numeroIngresado = 0;

    console.log("Ingresa un numero");
    numeroIngresado = Number(leer());

    if (numeroIngresado > 0) {
        console.log("esto es positivo");
    } else if ("numeroIngresado <0") {
        console.log("esto es negativo");
    } else {
        console.log("esto es cero");

    }

}


main();


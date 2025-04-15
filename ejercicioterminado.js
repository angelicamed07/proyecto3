const leer = require("prompt-sync")();
const MIN_GRAMOS = 5;
const MAX_GRAMOS = 10;
const TIEMPO_EXACTO = 3;

function main() {
    let tiempoPreparacion = 0;
    let cantidadIngrediente = 0;
    

    console.log("Ingresa la cantidad:");
    cantidadIngrediente = Number(leer());

    console.log("Tiempo de preparación:");
    tiempoPreparacion = Number(leer());
 
    let aptoParaConsumo =
        (cantidadIngrediente >= MIN_GRAMOS &&
        cantidadIngrediente <= MAX_GRAMOS )&&
        tiempoPreparacion === TIEMPO_EXACTO;

    aptoParaConsumo = aptoParaConsumo;

    console.log(" *** Resultado de preparación *** ");
    console.log("Cantidad de ingrediente:", cantidadIngrediente);
    console.log("Tiempo de preparación:", tiempoPreparacion);
    console.log("¿Apto para consumo?:", aptoParaConsumo ? "Sí" : "No");
}

main();
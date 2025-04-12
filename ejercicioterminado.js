const leer = require("prompt-sync")();
const MIN_GRAMOS = 5;
const MAX_GRAMOS = 10;
const TIEMPO_EXACTO = 3;

function main() {
    let tiempoPreparacion = 0;
    let cantidadIngrediente = 0;
    let aptoParaConsumo = false;

    console.log("Ingresa la cantidad:");
    cantidadIngrediente = parseFloat(leer());

    console.log("Tiempo de preparación:");
    tiempoPreparacion = parseFloat(leer());

    // Calcular si es apto para consumo (lógica correcta ahora dentro del main)
    const APTO_CONSUMO =
        cantidadIngrediente >= MIN_GRAMOS &&
        cantidadIngrediente <= MAX_GRAMOS &&
        tiempoPreparacion === TIEMPO_EXACTO;

    aptoParaConsumo = APTO_CONSUMO;

    console.log(" *** Resultado de preparación *** ");
    console.log("Cantidad de ingrediente:", cantidadIngrediente);
    console.log("Tiempo de preparación:", tiempoPreparacion);
    console.log("¿Apto para consumo?:", aptoParaConsumo ? "Sí" : "No");
}

main();
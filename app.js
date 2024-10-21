
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInToYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInToYen;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function(valueInToYen) {
    // Convertimos el valor a dólares
    let valueInpound= valueInToYen * 0.87;
    // Retornamos el valor en dólares
    return valueInpound;
}

const oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87   // British Pound
}



// Exportamos las funciones al final
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
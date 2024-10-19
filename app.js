const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum }
// Objeto con los valores de conversión
let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87   // British Pound
}

// Función para convertir de euros a dólares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    // Primero convertimos de dólares a euros y luego de euros a yenes
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

// Función para convertir de yenes a libras
function fromYenToPound(yen) {
    // Primero convertimos de yenes a euros y luego de euros a libras
    let euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

// Ejemplos de uso:
console.log(fromEuroToDollar(1)); // 1 EUR = 1.07 USD
console.log(fromDollarToYen(1));  // 1 USD = X JPY
console.log(fromYenToPound(100)); // 100 JPY = X GBP
module.exports = {
    
}
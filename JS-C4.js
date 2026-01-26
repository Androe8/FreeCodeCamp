function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C is equal to ${fahrenheit}°F.`;
}
const celsiusTemp = 25;
let conversionResult = convertCtoF(celsiusTemp);
console.log(conversionResult);
// You will see the information about every lab on the LabsContext folder.

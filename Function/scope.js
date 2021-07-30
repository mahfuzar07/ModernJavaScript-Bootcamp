//Global Scope (convertFahrenheitToCelsius, tempone, temptwo)
//Local Scope (Fahrenheit, celsius)

let convertFahrenheitToCelsius = function (Fahrenheit) {
  let celsius = ((Fahrenheit - 32) * 5) / 9;

  return celsius;
};
let tempone = convertFahrenheitToCelsius(32);
let temptwo = convertFahrenheitToCelsius(68);
console.log(tempone);
console.log(temptwo);

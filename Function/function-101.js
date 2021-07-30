//Function is sub of Program- input(argument),code,output

let greetUser = function () {
  console.log('welcome user!');
};
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};
let value = square(3);
let otherValue = square(5);
console.log(value);
console.log(otherValue);

//Convert Fahrenheit To Celsius

let convertFahrenheitToCelsius = function (Fahrenheit) {
  let celsius = ((Fahrenheit - 32) * 5) / 9;
  return celsius;
};
let tempone = convertFahrenheitToCelsius(32);
let temptwo = convertFahrenheitToCelsius(68);
console.log(tempone);
console.log(temptwo);

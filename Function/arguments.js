//Multiple Arguments
let math = function (a, b, c) {
  return (a + b) / c;
};
let result = math(10, 10, 3);
console.log(result.toFixed(2));

//Deafult Arguments Values
let getScore = function (player = 'Tamim', score = 50) {
  console.log(player);
  console.log(score);
};
getScore();

//Find Discount Money
let getDiscount = function (total, discount = 0.2) {
  return total * discount;
};
let discount = getDiscount(245);
console.log(`Discount Amount: ${discount.toFixed(2)}`);

//Undefined For Variable
let name;
if (name === undefined) {
  console.log('please provide Your Name');
} else {
  console.log(name);
}
//Undefined For Function Arguments
let square = function (num) {
  return num;
};
let result = square();
console.log(result);

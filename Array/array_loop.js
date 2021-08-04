//forEach
const number = ['Mahfuzar', 'Mahfuz', 'Sohan', 'Shovon'];
const pushNumber = [];
number.forEach(x => {
  pushNumber.push('Mr. ' + x);
});
console.log(pushNumber);

//Another one
const todos = [
  'Order food',
  'Clean kitchen',
  'Buy food',
  'Do work',
  'Exercise',
];
todos.forEach(function (item, index) {
  const no = index + 1;
  console.log(`${no}. ${item}`);
});

//for_loop

for (let count = 0; count <= todos.length - 1; count++) {
  console.log(`Todo: ${todos[count]}`);
}

//Code Challange
let myAccount = {
  name: 'Mahfuzar',
  expense: 0,
  income: 0,
};
//addexpenses
let addExpense = function (account, amount) {
  account.expense = account.expense + amount;
};
//addIncome
let addIncome = function (account, income) {
  account.income = account.income + income;
};
//resetAccount
let resetAccount = function (account) {
  account.expense = 0;
  account.income = 0;
};
//getAccountSummary
let getSummary = function (account) {
  let balance = account.income - account.expense;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expense} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 250);
addExpense(myAccount, 240);
console.log(getSummary(myAccount));

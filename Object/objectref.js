let myAccount = {
  name: 'Mahfuzar',
  expense: 0,
  income: 0,
};
let otherAccount = myAccount;
otherAccount.income = 1500;

let addExpense = function (account, amount) {
  account.expense = account.expense + amount;
  console.log(account);
};
addExpense(myAccount, 250);

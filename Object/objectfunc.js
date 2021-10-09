let myBook = {
  title: 'Apekkha',
  author: 'Humayun Ahmed',
  pageCount: 250,
};
let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
  };
};
let bookSumamry = getSummary(myBook);
console.log(bookSumamry.summary);

//Another Object with Function Example
let convertFahr = function (fahr) {
  return {
    fahr: fahr,
    kalvine: (fahr - 32) * (5 / 9) + 273.15,
  };
};
let temps = convertFahr(80);
console.log(`${temps.fahr}F for ${temps.kalvine.toFixed(2)}K`);

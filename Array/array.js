//Create  Atray
const notes = ['Note 01', 'Note 02', 'Note 03'];

console.log(notes.pop()); //remove array in last item by pop
notes.push('My New Note'); //array last item add in array by push

console.log(notes.shift());
notes.unshift('My First Note');

notes.splice(1, 0, 'This is New Second Item'); //target index remove/without_remove replace/add item

console.log(notes.length); // Array item Count

console.log(notes); // All Array item
console.log(notes[0]); //Access an Array item using the index position
console.log(notes[notes.length - 1]); //Access an Array last item using the index position

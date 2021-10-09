let restaurant = {
  name: 'ASB',
  capacity: 50,
  guestCount: 0,
  checkAvilability: function (partySize) {
    let seatLeft = this.capacity - this.guestCount;
    return partySize <= seatLeft;
  },
};
let avilabeStatus = restaurant.checkAvilability(7);
console.log(avilabeStatus);

var poker_deck = [//....and so on
];

let suits = ['Spade', 'Heart', 'Diamond', 'Club'];
let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let cards_on_hand = [];

//create 52 cards fot poker deck
suits.forEach(s => values.forEach(v => poker_deck.push([s,v])));

let max = 4;
let min = 1;
let rand = Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < rand; i++) {
  let a = Math.floor(Math.random() * poker_deck.length);
  cards_on_hand.push(poker_deck[a]);
  poker_deck.splice(a,1);
}

function bubble(arr) {      //the default search function cards_on_hand.sort() does not work
  var len = arr.length;        //I don't know why
  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++){ 
      if (arr[j][1] > arr[j + 1][1]) {    // sort by values instead of suits
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubble(cards_on_hand);     // sort cards on hand by values

let single = cards_on_hand.length;   //count the number of singles
let two = 0;                          //pairs and three of a kind
let three = 0;                        //on hand
let four = 0;

let count = 0;
for (let i = 0; i < cards_on_hand.length - 1; i++) {
  if (cards_on_hand[i][1] == cards_on_hand[i+1][1]) {
    count += 1;
    } else {
      switch (count) {
        case 1:
        two += 1;
        single -= 2;
        break;
        case 2:
        three += 1;
        single -= 3;
        break;
        case 3:
        four += 1;
        single -= 4;
        break;
      }
      count = 0;
      }
}
switch (count) {
  case 1:
  two += 1;
  single -= 2;
  break;
  case 2:
  three += 1;
  single -= 3;
  break;
  case 3:
  four += 1;
  single -= 4;
  break;
}

let ans = {         // calculate the probability
  pair : 0,           // ans is the object storing the probability
  'Two pairs' : 0,
  'Three of a kind' : 0
}

switch (cards_on_hand.length) {
  case 1:
  ans.pair = 3 / 51;
  break;
  case 2:
  ans.pair = single * 3 / 50;
  if (two >= 1) {ans.pair = 1};
  break;
  case 3:
  ans.pair = single * 3 / 49;
  if (two >= 1) {ans.pair = 1};
  ans['Two pairs'] = two * single * 3 / 49;
  ans['Three of a kind'] = two * 2 / 49;
  if (three === 1) {ans['Three of a kind'] = 1};
  break;
  case 4:
  ans.pair = 4 * 3 / 48;
  if (two >= 1) {ans.pair = 1};
  ans['Two pairs'] = two * single * 3 / 48;
  if (two === 2) {ans['Two pairs'] = 1};
  ans['Three of a kind'] = two * 2 / 48;
  if (three === 1) {ans['Three of a kind'] = 1};
  break;
}

console.log(cards_on_hand);
/*
console.log(single);
console.log(two);
console.log(three);
console.log(four);
*/
console.log(ans);
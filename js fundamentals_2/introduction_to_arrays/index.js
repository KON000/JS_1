const friends = ['Michael', 'Steven', 'Peter'];

const year = new Array(1991, 1984, 2001, 2020);

console.log(friends[0]); // 'Michael'
console.log(friends[2]); // 'Peter'

console.log(friends.length); // 3

friends[2] = 'Jay';
console.log(friends); // [Michael, Steven, Jay]

const firstname = 'Jonas';
const jonas = [firstname, 'Shmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1991, 1967, 2002, 2010, 2018];
console.log(calcAge(years)); //NaN

// ADD ELEMENTS
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); // ['Michael', 'Steven', 'Peter', 'Jay']

const newLength = friends.push('Jay');
console.log(newLength); // 4

friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// REMOVE ELEMENTS
friends.pop(); // delete last element
friends.unshift(); // delete first element

friends.indexOf('Steven'); // 1 (true)
friends.indexOf('Bob'); // -1 (false)
friends.push(23);
console.log('23'); // false, 23 != '23'
if (friends.includes('Peter')) {
  console.log('U have a friend called Peter');
}

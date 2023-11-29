const dolphinsScore = [44, 23, 71];
const koalasScore = [65, 54, 49];

function averageScore(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // simplify
    sum += array[i];
  }
  return sum / array.length;
}
const averageDolphins = averageScore(dolphinsScore);
const averageKoalas = averageScore(koalasScore);

const greaterThat = 2;
if (averageDolphins > greaterThat * averageKoalas) {
  console.log('Dolphins team are win!');
} else if (averageKoalas > 2 * averageDolphins) {
  console.log('Koalas team are win!');
} else {
  console.log('Unfortunately no winner:(');
}

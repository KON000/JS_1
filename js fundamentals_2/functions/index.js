function fruitprocessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice); // "Juice with 5 apples and 0 oranges"
console.log(fruitprocessor(5, 0)); // "Juice with 5 apples and 0 oranges"

const appleOrangeJuice = fruitprocessor(2, 4);
console.log(appleOrangeJuice); // "Juice with 2 apples and 4 oranges"

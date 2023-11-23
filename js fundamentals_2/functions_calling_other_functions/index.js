function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${apples} apples and  ${oranges} oranges`;
  return juice;
}

fruitprocessor(2, 3);
console.log(fruitprocessor(2, 3));

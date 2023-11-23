const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirememnt = (birthYeah) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
};
console.log(calcAge2(2000));

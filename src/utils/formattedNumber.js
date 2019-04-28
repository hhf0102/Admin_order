export const thousandComma = (number) => {
  let num = number.toString();
  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
}

export const rateNumber = (numberA, numberB) => {
  return `${Math.abs(Math.round((numberA - numberB) * 100 / numberA))}%`;
}

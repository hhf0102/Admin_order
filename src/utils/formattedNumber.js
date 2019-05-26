export const thousandComma = (number) => {
  let num = number.toString();
  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(num)) {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
}

export const price = (str) => {
  return Number(str).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const formattedInputPrice = (str) => {
  const pattern = /\D/g
  return str.replace(pattern, '');
} 

export const rateNumber = (numberA, numberB) => {
  return `${Math.abs(Math.round((numberA - numberB) * 100 / numberA))}%`;
}

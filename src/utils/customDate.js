const getDate = (howManyMs) => {
  const date = new Date();
  let time = date.getTime();
  time += howManyMs;
  const newDate = new Date(time);
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  month = (month.toString().length == 1) ? `0${month}` : month;
  day = (day.toString().length == 1) ? `0${day}` : day;

  const result = `${newDate.getFullYear()}/${month}/${day}`;
  return result;
}

export const getDaily = () => {
  return getDate(0);
};

export const getWeekly = () => {
  return getDate(604800017);
};

export const getMonthly = () => {
  return getDate(2629800000);
};

export const getYearly = () => {
  return getDate(31557600000);
};

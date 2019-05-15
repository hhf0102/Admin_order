export const getTodayDate = () => {
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = (month.toString().length == 1) ? ("0" + month) : month;
  day = (day.toString().length == 1) ? ("0" + day) : day;

  const result = `${date.getFullYear()}/${month}/${day}`;
  return result;
};

export const getWeeklyDate = () => {
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate() + 7;
  month = (month.toString().length == 1) ? ("0" + month) : month;
  day = (day.toString().length == 1) ? ("0" + day) : day;

  const result = `${date.getFullYear()}/${month}/${day}`;
  return result;
};

export const getMonthlyDate = () => {
  const date = new Date();
  let month = date.getMonth() + 2;
  let day = date.getDate();
  month = (month.toString().length == 1) ? ("0" + month) : month;
  day = (day.toString().length == 1) ? ("0" + day) : day;

  const result = `${date.getFullYear()}/${month}/${day}`;
  return result;
};

export const getYearlyDate = () => {
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = (month.toString().length == 1) ? ("0" + month) : month;
  day = (day.toString().length == 1) ? ("0" + day) : day;

  const result = `${date.getFullYear() + 1}/${month}/${day}`;
  return result;
};

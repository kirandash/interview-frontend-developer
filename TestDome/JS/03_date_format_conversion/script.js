// Date format conversion
// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.<br>For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

const dateConversion = (datestr) => {
  const dateObj = new Date(datestr);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, 0);
  const date = String(dateObj.getDate()).padStart(2, 0);
  return `${year}${month}${date}`;
};

console.log(dateConversion('12/31/2014'));
console.log(dateConversion('2/1/2012'));

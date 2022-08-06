// 30. Convert time to military time format
let time = '09:03AM';
let time2 = '09:03PM';
// Output 09:03 AND 21:03

const convertTime = (str) => {
  str = str.toUpperCase();
  const period = str.includes('AM') ? 'AM' : 'PM';
  str = str.slice(0, -2);
  let [hours, minutes] = str.split(':');
  if (period === 'PM') {
    hours = String(+hours + 12);
  }
  hours = hours.padStart(2, 0);
  minutes = minutes.padStart(2, 0);
  return `${hours}:${minutes}`;
};

console.log(convertTime(time));
console.log(convertTime(time2));
console.log(convertTime('8:1am'));
console.log(convertTime('8:1pm'));

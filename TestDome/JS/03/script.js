function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let myDate = new Date(userDate);
  let y = myDate.getFullYear().toString();
  let m = (myDate.getMonth() + 1).toString();
  let d = myDate.getDate().toString();
  if(m.length == 1) m = "0" + m;
  if(d.length == 1) d = "0" + d;  
  return y + m + d;
}

console.log(formatDate("12/31/2014"));

function formatDate2(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let myDate = userDate.split("/");
  let m = myDate[0];
  let d = myDate[1];
  let y = myDate[2];
  if(m.length == 1) m = "0" + m;
  if(d.length == 1) d = "0" + d;
  return y+m+d;
}

console.log(formatDate2("12/31/2014"));
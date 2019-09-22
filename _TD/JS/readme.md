## JavaScript Interview Questions (TestDome)
01. Ensure
Ensure - value is not undefined with try catch
if(value === undefined){
    throw new Error('No value assigned!');
}
return value;
02. Remove Property from Object
if(obj.hasOwnProperty(prop)){
    delete obj[prop];
    return true;
}
return false;
03. Date M/D/YYYY to YYYYMMDD
Sol 1:
let myDate = new Date(userDate);
let y = myDate.getFullYear().toString();
let m = (myDate.getMonth() + 1).toString();
let d = myDate.getDate().toString();
if(m.length == 1) m = "0" + m;
if(d.length == 1) d = "0" + d;  
return y + m + d;
Sol 2:
let myDate = userDate.split("/");
let m = myDate[0];
let d = myDate[1];
let y = myDate[2];
if(m.length == 1) m = "0" + m;
if(d.length == 1) d = "0" + d;
return y+m+d;
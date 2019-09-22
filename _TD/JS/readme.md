JavaScript Interview Questions (TestDome)
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
function removeProperty(obj, prop) {
    if(obj.hasOwnProperty(prop)){
      delete obj[prop];
      return true;
    }
    return false;
  }
  let myObj = {
    'name': 'Kiran Kumar Dash',
    'age':'27',
    'country': 'India'
  };
  console.log(removeProperty(myObj, 'age'));
  console.log(JSON.stringify(myObj));
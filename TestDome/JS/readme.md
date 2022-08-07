## JavaScript Interview Questions (TestDome)
### 01. Error handling throw try catch with ensure fn [Easy]

### 02. Remove Property from Object [Medium]
```
if(obj.hasOwnProperty(prop)){
    delete obj[prop];
    return obj;
}
return false;
```

or 

`const { [prop]: myprop, ...newObj } = obj;`

### 03. Date M/D/YYYY to YYYYMMDD [Easy]
- `new Date(datestr)`
- `date.getFullYear()`, `date.getMonth()`, `date.getDate()`

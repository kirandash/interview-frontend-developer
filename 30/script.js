(function(){
    // 30. Convert time to military time format
    let time = '09:03AM';
    let time2 = '09:03PM';
    // Output 09:03 AND 21:03
    let militaryTime = function(time){
        time = time.toString();
        let timeArr = time.split(":");
        let hours = timeArr[0];
        let minutes = timeArr[1];
        if(time.indexOf("PM") > -1 && time !== '12:00PM'){
            hours = parseInt(hours) + 12;
            minutes = minutes.slice(0, 2); // slice(start, end)
        }else if(time === '12:00AM'){
            hours = '00';
        }
        minutes = minutes.slice(0, 2); // slice(start, end)
        return `${hours}:${minutes}`;
    }
    console.log(militaryTime(time));
    console.log(militaryTime(time2));
    console.log(militaryTime('12:00AM'));
    console.log(militaryTime('12:00PM'));
})();
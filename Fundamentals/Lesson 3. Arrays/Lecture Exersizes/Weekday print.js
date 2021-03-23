function printDay(weekday) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (weekday >=1 && weekday<=7) {
        console.log(day[weekday-1]);
    } else {
        console.log('Invalid day!');
    }
}
printDay(1)
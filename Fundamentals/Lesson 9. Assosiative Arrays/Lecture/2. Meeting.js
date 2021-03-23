function meetingList(arr) {
    let meetings = {};
    for (let el of arr) {
        let [weekday, name] = el.split(' ');
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
           // delete meetings[weekday];
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (const key in meetings) {
            console.log(`${key} -> ${meetings[key]}`);     
    }
}
meetingList(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
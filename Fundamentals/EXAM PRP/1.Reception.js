function prepExam(array) {
    let numArr = array.map(Number);
    let students = numArr.pop();
    let hoursspend = 0;

    let paxPerH = numArr.reduce((acc, agg) => acc + agg);

    while (students > 0) {
        students -= paxPerH;
        hoursspend++;

        if (hoursspend % 4 === 0) {
            hoursspend++;
        }
    }
    console.log(`Time needed: ${hoursspend}h.`);
}
prepExam(['3', '3', '5', '40']);
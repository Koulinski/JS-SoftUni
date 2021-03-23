function examPrep(input) {
    let index = 0;
    let countPoorMarks = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let taskCount =0;
    let sum =0;
    let negativeGradeCounter =0;
    let isEnough =true;
    let taskName = '';

    while (command !== 'Enough') {
        taskName = command;
        let grade = Number(input[index]);
        index++;
        if (grade <= 4) {
            negativeGradeCounter++;
        }
        if (negativeGradeCounter === countPoorMarks) {
            console.log(`You need a break, ${negativeGradeCounter} poor grades.`);
            isEnough = false;
            break;
        }
        taskCount++;
        sum+= grade;

        command = input[index];
        index++;
    }
if (isEnough) {
    let averageScore = sum / taskCount;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${taskCount}`);
    console.log(`Last problem: ${taskName}`);
}
}
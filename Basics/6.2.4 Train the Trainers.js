function train(input) {
    let index = 0;
    let trainers = Number(input[index++]);
    let command = input[index++];
    let counterPresentation = 0;
    let total = 0;


    while (command !== 'Finish') {
        counterPresentation++;
        let name = command;
        let sumGrade = 0;
        for (let i = 0; i < trainers; i++) {
let grade = Number(input[index++]);
sumGrade+=grade;
        }
        let tempAverage = sumGrade / trainers;
        total += tempAverage;
        console.log(`${name} - ${tempAverage.toFixed(2)}.`);
        command = input[index++];
    }
    console.log(`Student's final assessment is ${(total / counterPresentation).toFixed(2)}.`);
}
train(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])
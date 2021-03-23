function examPrep(input) {
   let index =0;
   let failMarks = Number(input[index]);
   index++;
   let command = input[index];
   index++;
   
let taskCounter =0;
let sum = 0;
let lastProblem ='';
let poorMark =0;
let isEnough = true;

while (command !== 'Enough') {
   lastProblem = command;
   let grade = Number(input[index]);
   index++;
   if (grade <= 4) {
      poorMark++;
   }
   if (poorMark === failMarks) {
      console.log(`You need a break, ${poorMark} poor grades.`);
      isEnough = false;
      break;
   }
   taskCounter++;
   sum+=grade;
   command=input[index];
   index++;
}
    if (isEnough) {
       let average = sum / taskCounter;
       console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${taskCounter}`);
    console.log(`Last problem: ${lastProblem}`);
    }
}
examPrep([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4])
function walking(input) {
let goal = 10000;
let stepsSum = 0;
let index =0;
let command = input[index];
index++;
//let steps = input[index];

while (stepsSum < goal) {
   let steps = Number(command);
    stepsSum+=steps;
    if (stepsSum >= goal && steps !== 'Going home'){
        console.log(`Goal reached! Good job! ${stepsSum - goal} steps over the goal!`);
    }
   else if (stepsSum >= goal && steps === 'Going home'){
        steps
        console.log(`Goal reached! Good job! ${stepsSum - goal} steps over the goal!`);
    }
   else if (stepsSum < goal) {
        console.log(`${goal - stepsSum} more steps to reach goal.`);
    }
}
//console.log(stepsSum);
}
walking(['1500', '300', '2500', '3000', 'Going home', '200'])
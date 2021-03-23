function numSum(input) {
    let goal = Number(input[0]);
    let index = 1;
    let sum = 0;
    while (goal > sum) {
sum +=Number(input[index]);
index++;
    }
    console.log(sum);
}
numSum([100, 10, 20, 30, 40])
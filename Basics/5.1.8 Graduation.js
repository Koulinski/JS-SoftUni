function graduation(input) {
    let name = input[0];
    let grade = 1;
    let sum = 0;
    let excluded = 0;
    let index =1;
    let terminated = false;
    
    while (grade <= 12) {
        let score = Number(input[index]);
        index++;
        if (score >= 4.00) {
            grade++;
            sum += score;
        }
        if (score < 4.00) {
            excluded++;
        }
        if (excluded >= 2) {
            terminated = true;
           break;
        }
    }
    let average = sum / 12;
    if (terminated === true) {
    console.log(`${name} has been excluded at ${grade} grade`);
    }
    else {
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6', '2', '3'])
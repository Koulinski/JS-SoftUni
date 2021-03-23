function walking (input) {
    let index = 0;
    let command = input[index];
    index++;
    let goal = 10000;

    while (command !== 'Going home') {
        let steps = Number(command);
        goal -= steps;
        if(goal <=0){
            console.log(`Goal reached! Good job! 
            ${Math.abs(goal)} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
        if (command === 'Going home') {
            let steps = Number(input[index]);
            index++;
            goal -= steps;
            if (goal <= 0) {
                console.log(`Goal reached! Good job! 
                ${Math.abs(goal)} steps over the goal!`);
            }else {
                console.log(`${goal} more steps to reach goal.`);
            }
        }
    }

walking(['1000', '1500', '2000', '6500'])
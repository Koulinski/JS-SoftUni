function oddAndEven(input) {
    let newArray = [];
    let firstSum = 0;
    let secondSum = 0;
    for (let num of input) {
        firstSum += num;
    }

    for (let index = 0; index < input.length; index++) {

        if (input[index] % 2 == 0) {
            input[index] = input[index] + index;
            newArray.push(input[index]);
        } else {
            input[index] = input[index] - index;
            newArray.push(input[index]);
        }
    }
    for (const num of newArray) {
        secondSum += num;
    }
    console.log(newArray);
    console.log(firstSum);
    console.log(secondSum);
}
oddAndEven([5, 15, 23, 56, 35]);
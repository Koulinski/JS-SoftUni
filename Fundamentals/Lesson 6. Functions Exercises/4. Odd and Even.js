function oddAndEven(numRecieved) {

    let sumOdd = 0;
    let sumEven = 0;

    function splitToDigit(number) {
        return [...number + ''].map(Number)
    }

    splitToDigit(numRecieved).forEach(element => {
        if (element % 2 === 0) {
            sumEven += element;
        } else {
            sumOdd += element;
        }
    });
    let result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
    return result;
}

let result = oddAndEven(1000435);
oddAndEven(3495892137259234);
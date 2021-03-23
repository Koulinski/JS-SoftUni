function oddAndEven(n) {


    let digitArr = splitNumber(n);
    let sums = sumOfArray(digitArr);


    function splitNumber(num) {
        return [...num + ''].map(Number)
    }

    function sumOfArray(arr) {
        let evenSum = 0;
        let oddSum = 0;

        for (let n of arr) {
            n = Number(n);
            if (n % 2 == 0) {
                evenSum += n;
            } else {
                oddSum += n;
            }
        }
        return [evenSum, oddSum];
    }
    let result = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;

    return result;
}
let result = oddAndEven(`1000435`);
console.log(result);
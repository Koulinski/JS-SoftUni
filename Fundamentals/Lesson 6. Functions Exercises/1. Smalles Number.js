function smallestOfN() {
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    function getSmallestNumber(n) {
        if (n < smallestNumber) {
            smallestNumber = n;
        }
    }

    for (const element of arguments) {
        getSmallestNumber(element);
    }

    return smallestNumber;
}
let result = smallestOfN(1, 2, 3);
console.log(result);
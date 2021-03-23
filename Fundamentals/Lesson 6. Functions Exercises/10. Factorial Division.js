function factorial(n, g) {

    function factor(n) {
        if (n == 0) {
            return 1;
        }
        return n * factor(n - 1);
    }
    return (factor(n) / factor(g)).toFixed(2);
}
let result = factorial(5, 2);
console.log(result);
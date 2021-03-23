function palindrome(array) {

    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join('');
        return Number(reversedN) === n ? true : false;;
    }
    let line = '';
    for (const n of array) {
        line += isPalindrome(n) + '\n';
    }
    return line
}
let result = palindrome([32, 2, 232, 1010]);
console.log(result);
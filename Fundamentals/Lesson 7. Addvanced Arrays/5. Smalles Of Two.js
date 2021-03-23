function smallestOfTwo(input) {
    input = input.sort((a, b) => a - b).slice(0,2).join(' ');
    return input;
}
let result = smallestOfTwo([30, 15, 50, 5]);
console.log(result);
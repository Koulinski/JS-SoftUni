/* function reverseStuff(n, input) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(input[i]);
    }
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        output += `${arr[i]} `;
    }
    console.log(output);
} */

/* function reverseStuff(n, input) {
    let nNums = [];
    let reversed =[];
    for (let i = 0; i < n; i++) {
        nNums.push(input[i]);
    }
    for (let i = nNums.length - 1; i >= 0; i--) {
        reversed.push(nNums[i]);
    }
console.log(reversed.join(' '));
}
reverseStuff(3, [10, 20, 30, 40, 50]); */

function reverseStuff(n, input) {
    let nNums = [];
    for (let i = 0; i < n; i++) {
        nNums.push(input[i]);
    }
    
console.log(nNums.reverse().join(' '));
}
reverseStuff(3, [10, 20, 30, 40, 50]);
/* function betweenTwoCharacters(first, second) {

    let getStartPoint = (first, second) => Math.min(first.charCodeAt(0), second.charCodeAt(0));
    let smallerNum = getStartPoint(first, second);
    let getEndPoint = (first, second) => Math.max(first.charCodeAt(0), second.charCodeAt(0));
    let biggerNum = getEndPoint(first, second);

    let stringOfNumbers = [...Array(biggerNum).keys()].splice(smallerNum + 1);
    let result = (String.fromCharCode(...stringOfNumbers));
    console.log(result.split('').join(' '));
}
betweenTwoCharacters('a', 'd') */


function between(first, second) {
    let line = '';
    first = first.charCodeAt(0);
    second = second.charCodeAt(0);
    if (first < second) {
        for (let i = first + 1; i < second; i++) {
            line += String.fromCharCode(i) + ' ';
        }
    } else {
        for (let i = second + 1; i < first; i++) {
            line += String.fromCharCode(i) + ' ';
        }
    }
    return line;
}
between('a', 'd')


/* function printAscii(first, second) {

    let getStartPoint = (first, second) => Math.min(first.charCodeAt(0), second.charCodeAt(0));
    let smallerNum = getStartPoint(first, second);
    let getEndPoint = (first, second) => Math.max(first.charCodeAt(0), second.charCodeAt(0));
    let biggerNum = getEndPoint(first, second);

    let arr = [];
    let newArr =[];

    for (let i = smallerNum + 1; i < biggerNum; i++) {
        arr.push(i);
    }
    for (let i = 0; i < arr.length; i++) {
        newArr.push(String.fromCharCode(arr[i]));
     }
     console.log(newArr.join(' '));
}
printAscii('a', 'd'); */
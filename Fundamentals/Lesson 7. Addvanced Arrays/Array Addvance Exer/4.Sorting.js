function sortNums(array) {

    let sorted = array.sort((a, b) => a - b);

    let newArr = [];
    for (let i = 0; i < sorted.length; i++) {
        newArr.push(sorted.pop())
        newArr.push(sorted[i]);
    }
    console.log(newArr.join(' '));
}
sortNums([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
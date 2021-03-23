function breakStuff(arr, start, value) {
    let numsToWork = arr;
    //console.log(numsToWork);
    let index = arr[start];
    //console.log(index);
    let left = arr.splice(0, start);
    let right = arr.splice(1, arr.length - 1);

    if (value === 'cheap') {
        left = left.filter(x => x < index);
        right = right.filter(x => x < index);
    } else if (value === 'expensive') {
        left = left.filter(x => x >= index);
        right = right.filter(x => x >= index);
    }

    let leftSum = left.reduce((acc, agr) => acc + agr);
    let rightSum = right.reduce((acc, agr) => acc + agr);
   
if (leftSum >= rightSum) {
    console.log(`Left - ${leftSum}`);
} else {
    console.log(`Right - ${rightSum}`);
}

}
breakStuff([1, 5, 1], 1, 'cheap');
// breakStuff([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, 'expensive');
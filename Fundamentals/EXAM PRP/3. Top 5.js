function topFive(nums) {
    let array = nums.split(' ').map(Number);
    let avrgSum = array.reduce((acc, agg) => (acc + agg));
    let average = (avrgSum / array.length).toFixed(2);
    let topNums = array.filter(numbers => numbers > average).sort((a, b) => b - a).splice(0, 5);

    if (topNums.length > 0) {
        console.log(topNums.join(' '));
    } else {
        console.log(`No`);
    }
}
//topFive('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// topFive('-1 -2 -3 -4 -5 -6');
// topFive('10 20 30 40 50');
//topFive('1')
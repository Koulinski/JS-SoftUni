function power(input) {
    let nums = Number(input);
    let nums1 = 1;
    for (let i = 0; i <= nums; i += 2) {
        console.log(nums1);
        nums1 = nums1 * 2 * 2;
    }
}
power(7)
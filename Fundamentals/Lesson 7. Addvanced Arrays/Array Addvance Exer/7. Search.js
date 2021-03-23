function searchStuff(array, array2) {

    let workArr = array.splice(0, array2[0]).splice(array2[1]).filter(x => x === array2[2]);
    console.log(`Number ${array2[2]} occurs ${workArr.length} times.`);
}
searchStuff([5, 2, 3, 4, 1, 3], [5, 2, 3]);
function removeRepeating(array) {

    function repeatRemove(a) {
        let filteredNum = a.reduce((el, i) => el.includes(i) ? el : [...el, i], []);
        return filteredNum.join(' ');
    }
    // return repeatRemove(array);

    function sameButDiff(a) {
        let diff = a.filter((el, i) => a.indexOf(el) === i);
        return diff.join(' ');
    }
    return sameButDiff(array);
}
let result = removeRepeating([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log(result);
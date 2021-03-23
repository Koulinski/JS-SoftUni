function addOrRemove(array) {

    let sum = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'add') {
            array[index] = Number(index + 1);
            sum.push(array[index]);
        } else {
            sum.pop(array[index]);
        }
        //console.log(array[index]);
    }
    if (sum.length > 0) {
        console.log(sum.join(' '));
    } else {
        console.log(`Empty`);
    }
}
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
//addOrRemove(['remove', 'remove', 'remove']);
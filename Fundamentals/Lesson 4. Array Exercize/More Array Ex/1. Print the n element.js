function print(array) {
    let newArray = [];
    let steps = Number(array[array.length - 1]);
    array.pop(array[array.length - 1]);
    for(let i=0; i<= array.length; i+= steps) {
        newArray.push(array[i]);
    }
    console.log(newArray.join(' '));
}
print(['5', '20', '31', '4', '20', '2']);
print(['1', '2', '3', '4', '5', '6'])
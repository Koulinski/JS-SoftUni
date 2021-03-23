function modArray(array, array2) {

    for (const line of array2) {
        let [comm, index, ...elements] = line.split(' ');
        index = Number(index);
        elements = elements.map(Number);

        if (comm === 'add' || comm === 'addMany') {
            array.splice(index, 0, ...elements);
        } else if (comm === 'contains') {
            let el = index;
            console.log(array.indexOf(el));
        } else if (comm === 'remove') {
            array.splice(index, 1);
        } else if (comm === 'shift') {
            let rotation = index % array.length;
            let splicedPart = array.splice(0, rotation);
            array.push(...splicedPart);
        } else if (comm === 'sumPairs') {
            for (let i = 0; i < array.length; i++) {
                let secondEl = array[i + 1] ? array[i + 1] : 0;
                array[i] += secondEl;
                array.splice(i + 1, 1);
            }
        } else if (comm === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
        }
    }

}
modArray([1, 2, 3, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
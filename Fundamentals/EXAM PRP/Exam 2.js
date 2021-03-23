function actionswith(array) {

    let workWith = array.shift();
    for (let el of array) {
        let [comm, index, alt] = el.split(' ');
        index = Number(index);
        alt = Number(alt);

        if (comm === 'Mort') {
            break;
        } else if (comm === 'Add') {
            workWith.push(index);
        } else if (comm === 'Remove' && workWith.includes(index)) {
            let el = workWith.indexOf(index);
            workWith.splice(el, 1);
        } else if (comm === 'Collapse') {
            workWith = workWith.filter(a => a >= index);
        } else if (comm === 'Replace' && workWith.includes(index)) {
            let el = workWith.indexOf(index);
            workWith.splice(el, 1, alt);
        }
    }
    console.log(workWith.join(' '));
}
actionswith([
    [1, 4, 5, 19, 13, 42, 69, 24],
    "Add 1",
    "Remove 4",
    "Replace 1 26",
    "Mort"
]);

/* actionswith([
    [2, -1, 0, -3, 9, 8, 7, 2],
    "Collapse 8",
    "Mort"
]); */
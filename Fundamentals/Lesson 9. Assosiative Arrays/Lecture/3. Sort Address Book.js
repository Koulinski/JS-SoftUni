function sortBook(arr) {
    let addressbook = {};
    for (let el of arr) {
        let [name, address] = el.split(':');
        addressbook[name] = address;
    }
    let sorted = Object.entries(addressbook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(sorted);

    sorted.forEach(el => {
     console.log(`${el[0]} -> ${el[1]}`);
    });
}
sortBook(['Tim: Doe Crossing', 'Bill: Nelson Place', 'Peter: Carlyle Ave', 'Bill: Ornery Rd']);
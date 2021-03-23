function alphabeticOrder(input) {
    input = input.sort();
    input.forEach((element, index) => {
        console.log(index + 1 + '.' + element);
    });
}
alphabeticOrder(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);

function storage(arr) {
    let map = new Map();

    for (let el of arr) {
        let [product, quantity] = el.split(' ');
        quantity = Number(quantity);
    
    if (!map.has(product)) {
        map.set(product, +quantity);
    } else {
        let currQuantity = map.get(product);
        let newQuantity = currQuantity += quantity;
        map.set(product, newQuantity);
    }
}

for (let e of map) {
    console.log(`${e[0]} -> ${e[1]}`);
}
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
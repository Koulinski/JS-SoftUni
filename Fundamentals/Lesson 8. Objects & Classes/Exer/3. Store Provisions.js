function store(arr, arr2) {
    let store = {};
    addToShop(arr2, addToShop(arr, store));
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

    function addToShop(stuff, obj) {
        for (let i = 0; i < stuff.length; i += 2) {
            const product = stuff[i];
            const quantity = Number(stuff[i + 1]);

            if (!obj.hasOwnProperty(product)) {
                obj[product] = 0;
            }
            obj[product] += quantity;
        }
        return obj;
    }
}
store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
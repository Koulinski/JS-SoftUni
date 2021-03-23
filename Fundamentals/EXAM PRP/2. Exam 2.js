function shop(arr) {
    let itemsToShop = arr.shift().split('!');
    // console.log(itemsToShop);

    for (let el of arr) {
        if (el === 'Go Shopping!') {
            break;
        }
        let [comm, item, alt] = el.split(' ');
        if (comm === 'Urgent') {
            if (itemsToShop.includes(item)) {
                continue;
            } else {
                itemsToShop.unshift(item);
            }
        } else if (comm === 'Unnecessary' && itemsToShop.includes(item)) {
            let el = itemsToShop.indexOf(item);
            itemsToShop.splice(el, 1);
        } else if (comm === 'Correct' && itemsToShop.includes(item)) {
            let el = itemsToShop.indexOf(item);
            itemsToShop.splice(el, 1, alt);
        } else if (comm === 'Rearrange' && itemsToShop.includes(item)) {
            let el = itemsToShop.indexOf(item);
            let ins = itemsToShop.splice(el, 1);
            itemsToShop.push(...ins)
        }



    }
    console.log(itemsToShop.join(', '));
}
shop(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);

/* shop(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes", 
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]) */
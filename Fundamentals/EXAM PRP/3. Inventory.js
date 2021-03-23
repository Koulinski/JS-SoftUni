function inv(array) {
    let inventory = array.shift().split(', ');
    //console.log(array);

    for (const el of array) {
        let [comm, resource] = el.split(' - ');

        if (comm === 'Collect') {
            if (!inventory.includes(resource)) {
                inventory.push(resource);
            }
        } else if (comm === 'Drop' && inventory.includes(resource)) {
            let item = inventory.indexOf(resource);
            inventory.splice(item, 1);
        } else if (comm === 'Renew' && inventory.includes(resource)) {
            let item = inventory.indexOf(resource);
            let del = inventory.splice(item, 1);
            inventory.push(...del);
        } else if (comm === 'Combine Items') {
            let stuff = resource.split(':');
            let weapon = stuff[0];
            let upg = stuff[1];
            if (inventory.includes(weapon)) {
                let item = inventory.indexOf(weapon);
                inventory.splice(item + 1, 0, upg)
            }
        } else if (comm === 'Craft!') {
            break;
        }
    }
    console.log(inventory.join(', '));
}
//inv(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inv(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
function gladiator(array) {

    let inventory = array.shift().split(' ');

    for (const el of array) {
        let [comm, equipment] = el.split(' ');

        if (comm === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }

        } else if (comm === 'Trash' && inventory.includes(equipment)) {
            let rem = inventory.indexOf(equipment);
            inventory.splice(rem, 1);
        } else if (comm === 'Repair' && inventory.includes(equipment)) {
            let rem = inventory.indexOf(equipment);
            let ins = inventory.splice(rem, 1);
            inventory.push(...ins);
        } else if (comm = "Upgrade") {
            let retro = equipment.split('-');
            let weapon = retro[0];
            let upg = retro[1];
            if (inventory.includes(weapon)) {
                let rem = inventory.indexOf(weapon);
                inventory.splice(rem + 1, 0, `${weapon}:${upg}`)
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    "Upgrade Spear-V"
]);
function sortHeroes(arr) {
    let heroes = [];

    for (const el of arr) {
        let [name, level, ability] = el.split(' / ');
        let multiAbi = ability.split(', ').sort();
        level = Number(level);

        heroes.push({
            name,
            level,
            multiAbi
        });

    }
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.multiAbi.join(', ')}`);
    })
}
sortHeroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
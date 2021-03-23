function heroesOfLogic(arr) {
    let companions = arr.shift();
    let dudes = arr.splice(0, companions);
    let heroes = {};

    dudes.forEach(el => {
        let [name, hp, mp] = el.split(' ');
        hp = Number(hp);
        mp = Number(mp);

        heroes[name] = {
            hp,
            mp
        }
    });

    while (arr[0] !== 'End') {
        let [comm, ...args] = arr.shift().split(' - ');

        if (comm === 'CastSpell') {
            let [name, mp, spell] = args;
            mp = Number(mp);

            let heroName = heroes[name];
            if (heroName.mp >= mp) {
                heroName.mp -= mp;
                console.log(`${name} has successfully cast ${spell} and now has ${heroName.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }

        } else if (comm === 'TakeDamage') {
            let [name, hp, attacker] = args;
            hp = Number(hp);
            let heroName = heroes[name];

            if (heroName.hp - hp > 0) {
                heroName.hp -= hp;
                console.log(`${name} was hit for ${hp} HP by ${attacker} and now has ${heroName.hp} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }

        } else if (comm === 'Recharge') {
            let [name, mp] = args;
            mp = Number(mp);
            let heroName = heroes[name];
            if (heroName.mp + mp > 200) {
                console.log(`${name} recharged for ${200 - heroName.mp} MP!`);
                heroName.mp = 200;
            } else {
                console.log(`${name} recharged for ${mp} MP!`);
                heroName.mp += mp;
            }

        } else if (comm === 'Heal') {
            let [name, hp] = args;
            hp = Number(hp);
            let heroName = heroes[name];
            if (heroName.hp + hp > 100) {
                console.log(`${name} healed for ${100 - heroName.hp} HP!`);
                heroName.hp = 100;
            } else {
                console.log(`${name} healed for ${hp} HP!`);
                heroName.hp += hp;
            }
        }
    }

    function sortHero(a, b) {
        let [heroName, heroHP] = a;
        let [heroNameB, heroHPB] = b;
        let result = heroHPB.hp - heroHP.hp;

        if (result === 0) {
            return heroName.localeCompare(heroNameB);
        }
        return result;
    }


    let sorted = Object.entries(heroes).sort(sortHero);

    for (const [name, stats] of sorted) {
        let {
            hp,
            mp
        } = stats;
        console.log(`${name}\n  HP: ${hp}\n  MP: ${mp}`);
    }
}
/* heroesOfLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]); */

heroesOfLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
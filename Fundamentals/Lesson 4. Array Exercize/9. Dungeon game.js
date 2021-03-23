function game(array) {
    let health = 100;
    let coins = 0;
    let rooms = array[0].split('|');
    let isDead = false;

    for (let index = 0; index < rooms.length; index++) {
        const roomArray = rooms[index].split(' ');
        let item = roomArray[0];
        let n = Number(roomArray[1]);
        if (item === 'potion') {
            if (100 - health <= n) {
                n = 100 - health;
            health += n;}
            console.log(`You healed for ${n} hp.`);
            console.log(`Current health: ${health} hp.`);
            }
         else if (item === 'chest') {
            coins += n;
            console.log(`You found ${n} coins.`);
        } else {
            health -= n;
            if (health >= 0) {
console.log(`You slayed ${item}.`);
            }else {
                isDead = true;
            console.log(`You died! Killed by ${item}.`);
            console.log(`Best room: ${index+1}`);
            break;
            }
        }
    }
    if (isDead === false) {
console.log(`You've made it!`);
console.log(`Coins: ${coins}`);
console.log(`Health: ${health}`);
    }
}
game(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
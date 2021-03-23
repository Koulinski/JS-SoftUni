function muOnline(nums) {
    let array = Array.from(nums).join('');
     let health = 100;
     let bitcoins = 0;
     let rooms = array.split('|');
     let isDead = false;

     for (let el of rooms) {
         let [event, amount] = el.split(' ');
         amount = Number(amount);

         if (event === 'potion') {
             if (health + amount > 100) {
                 let total = health + amount;
                 let healedFor = total - 100;
                 console.log(`You healed for ${amount-healedFor} hp.`);
                 health = 100;
                 console.log(`Current health: ${health} hp.`);
             } else {
                 health += amount;
                 console.log(`You healed for ${amount} hp.`);
                 console.log(`Current health: ${health} hp.`);
             }
         } else if (event === 'chest') {
             bitcoins = bitcoins + amount;
             console.log(`You found ${amount} bitcoins.`);
         } else {
             health -= amount;
             if (health <= 0) {
                 isDead = true;
                 console.log(`You died! Killed by ${event}.`);
                 let index = rooms.indexOf(el);
                 console.log(`Best room: ${index+1}`);
                 break;
             } else {
                 console.log(`You slayed ${event}.`);
             }
         }
     }
     if (isDead === false) {
         console.log(`You've made it!`);
         console.log(`Bitcoins: ${bitcoins}`);
         console.log(`Health: ${health}`);
     } 
}
 //muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
 muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
 function wagon(array) {
     let pax = array.shift().split(' ').map(Number);
     let capacity = Number(array.shift());
     let commands = array.join(' ').split(' ');
     console.log(commands);

     for (let i = 0; i <= commands.length; i++) {
         let item = commands[0];
         let cart = Number(commands[1]);
         if (item === 'Add') {
             pax.push(cart);
             commands.splice(0, 2);
         }

     }
     commands = commands.map(Number);
     console.log(commands);
     for (let j = 0; j < commands.length; j++) {
         for (let h = 0; h < pax.length; h++) {
             if (commands[j] + pax[h] <= capacity) {
                 pax[h] += commands[j];
                 break;
             }
         }
     }

     console.log(pax.join(' '));
     //console.log(typeof pax);

 }
 wagon(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75', 'Add 2']);
 //wagon(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
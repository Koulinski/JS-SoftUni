function game(array) {

    let health = Number(array.shift());
    let counter = 0;

    for (let el of array) {
        if (el === 'End of battle') {
            console.log(`Won battles: ${counter}. Energy left: ${health}`);
            break;
        }
        el = Number(el);
        if (health - el < 0) {
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${health} energy`);
            return;
        }
        health -= el;
        counter++;
        if (counter % 3 === 0) {
            health += counter;
        }
    }
  
}
game(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
game(['200', '54', '14', '28', '13', 'End of battle']);
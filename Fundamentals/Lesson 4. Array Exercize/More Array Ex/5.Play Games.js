function playGames(array) {
    let gamesOwned = array[0].split(' ');

        for (let index = 0; index < array.length; index++) {
            const instructions = array[index].split(' ');
            let command = instructions[0];
            let newGame = instructions[1];

            if (command === 'Play!') {
                break;
            } else if (command === 'Install') {
                gamesOwned.push(newGame);
            } else if (command === 'Uninstall' && gamesOwned.includes(newGame)) {
                gamesOwned = gamesOwned.filter(function (el) {
                    return !newGame.includes(el);
                });
            } else if (command === 'Update' && gamesOwned.includes(newGame)) {
                gamesOwned = gamesOwned.filter(function (el) {
                    return !newGame.includes(el);
                });
                gamesOwned.push(newGame);
            } else if (command === 'Expansion') {
                let expansion = newGame.split('-');
                let gem = expansion[0];
                if (gamesOwned.includes(gem)) {
                    let formated = expansion.join(':');
                    let ind = gamesOwned.indexOf(gem);
                    gamesOwned.splice(ind + 1, 0, formated);
                }
            }
        }
    
    console.log(gamesOwned.join(' '));
}


playGames(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
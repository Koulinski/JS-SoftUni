function piratesPlunder(arr) {
    let towns = {};


    // Fill the Object aka. towns
    while (arr[0] !== 'Sail') {
        let [city, pop, cash] = arr.shift().split('||');
        pop = Number(pop);
        cash = Number(cash);

        //Fill in obj with multiple values
        if (!towns.hasOwnProperty(city)) {
            towns[city] = {
                pop,
                cash
            };
        } else {
            let info = towns[city];
            info.pop += pop;
            info.cash += cash;
        }
    }
    arr.shift();
    while (arr[0] !== 'End') {
        let [comm, ...args] = arr.shift().split('=>');

        if (comm === 'Plunder') {
            let [city, pop, cash] = args;
            pop = Number(pop);
            cash = Number(cash);

            let info = towns[city];
            info.pop -= pop;
            info.cash -= cash;
            
            console.log(`${city} plundered! ${cash} gold stolen, ${pop} citizens killed.`);
            if (info.pop <= 0 || info.cash <= 0) {
                delete towns[city];
                console.log(`${city} has been wiped off the map!`);
            }
        } else {
            let [city, cash] = args;
            cash = Number(cash);

            let info = towns[city];
            if (cash < 0) {
                console.log(`Gold added cannot be a negative number!`);
                continue;
            } else {
                info.cash += cash;
                console.log(`${cash} gold added to the city treasury. ${city} now has ${info.cash} gold.`);
            }
        }
    }
    let sorted = Object.entries(towns).sort(sortCities);

    if (sorted.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

        for (const [city, cityInfo] of sorted) {
            let {
                cash,
                pop
            } = cityInfo;
            console.log(`${city} -> Population: ${pop} citizens, Gold: ${cash} kg`);
        }
    }

    function sortCities(a, b) {
        let [aCityName, aCityInfo] = a;
        let [bCityName, bCityInfo] = b;
        let result = bCityInfo.cash - aCityInfo.cash;

        if (result === 0) {
            return aCityName.localeCompare(bCityName);
        }
        return result;
    }
}
piratesPlunder([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);
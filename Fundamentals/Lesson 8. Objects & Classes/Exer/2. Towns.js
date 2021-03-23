function paString(arr) {
    class Town {
        constructor(town, lat, long) {
            this.town = town;
            this.lat = lat;
            this.long = long;
        }
    }
    for (const el of arr) {
        let [city, latt, longt] = el.split(' | ');
        loggs = Number(longt);
        loggs = loggs.toFixed(2);
        latitude = Number(latt);
        latitude = latitude.toFixed(2);
        let place = new Town(city, latitude, loggs);
        console.log(`{ town: '${place.town}', latitude: '${place.lat}', longitude: '${place.long}' }`);
    }
}
paString(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
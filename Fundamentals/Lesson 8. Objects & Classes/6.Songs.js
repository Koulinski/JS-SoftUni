function favSong(arr) {

    let n = arr.shift();
    let typeToPrint = arr.pop();
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let el of arr) {
        let [type, name, time] = el.split('_');
        songs.push(new Song(type, name, time));
    }

    if (typeToPrint === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        songs = songs.filter((i) => i.type === typeToPrint)
            .forEach((i) => console.log(i.name));
    }
}
favSong([3, 'favorite_DownTown_3:14', 'favorite_Kiss_4:16',
    'favorite_Smooth Criminal_4:01', 'favorite'
]);
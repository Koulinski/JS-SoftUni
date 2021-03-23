function movies(arr) {
    let listOfMovies = [];

    for (const el of arr) {
        if (el.includes('addMovie')) {
            let name = el.split('addMovie ')[1];
            listOfMovies.push({
                name
            });
        } else if (el.includes('directedBy')) {
            let [name, director] = el.split(' directedBy ');
            let movie = listOfMovies.find(m => m.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (el.includes('onDate')) {
            let [name, date] = el.split(' onDate ');
            let movie = listOfMovies.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }
    listOfMovies.forEach(m => {
        if (m.name && m.director && m.date) {
            console.log(JSON.stringify(m));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
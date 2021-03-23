function oldBooks(input) {
    let theBook = String(input[0]);
    let index = 1;
    let bookIsFound = false;
    let allBooks = input[index];

    while (allBooks !== 'No More Books') {
        if (allBooks === theBook) {
            bookIsFound = true;
            
            break;
        }
        index++;
        allBooks = input[index];
    }
    if (bookIsFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${index -1} books.`);
    } else {
        console.log(`You checked ${index -1} books and found it.`);
    }
}

oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy'])
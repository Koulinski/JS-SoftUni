function oldBook(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let isFound = false;

    while (command !== 'No More Books') {
        let bookName = command;
        if (bookName === favoriteBook) {
            console.log(`You checked ${counter} books and found it.`);
            isFound = true;
            break;
        }
        counter++;
        command = input[index];
        index++;
    }
    if (!isFound) {
        console.log('The book you search is not here!');
        console.log(`You checked ${counter} books.`);
    }
}
/*oldBook(["Troy",
"Stronger",
"Life Style",
"Troy"])*/
/*oldBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])*/
oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

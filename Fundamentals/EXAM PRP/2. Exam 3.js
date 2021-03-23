function bookshelf(arr) {
    let books = arr.shift().split('&');
    //console.log(books);

    for (let el of arr) {
        let [comm, index, alt] = el.split(' | ');

        if (comm === 'Done') {
            break;
        } else if (comm === 'Add Book') {
            if (books.includes(index)) {
                continue;
            } else {
                books.unshift(index);
            }
        } else if (comm === 'Take Book' && books.includes(index)) {
            let el = books.indexOf(index);
            books.splice(el, 1);
        } else if (comm === 'Swap Books' && books.includes(index) && books.includes(alt)) {
            let ab = books.indexOf(index);
            let ba = books.indexOf(alt);
            books.splice(ab, 1, alt);
            books.splice(ba, 1, index);
        } else if (comm === 'Insert Book') {
            books.push(index);
        } else if (comm === 'Check Book') {
            index = Number(index);
            if (books.length - 1 >= index) {
                console.log(books[index]);
            } else {
                continue;
            }
        }
    }
    console.log(books.join(', '));
}
/* bookshelf(["Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
    "Add Book | The Odyssey",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Check Book | 3",
    "Done"
]); */
bookshelf(["Anna Karenina&Heart of Darkness&Catch-22& The Stranger",
    "Add Book | David Copperfield",
    "Add Book | One Thousand and One Nights",
    "Swap Books | One Thousand and One Nights | Catch-22",
    "Take Book | David Copperfield",
    "Insert Book | The Stories of Anton Chekhov",
    "Check Book | 17",
    "Done"
])
function cinema(input) {
    let index = 0;
    let movie = input[index++];
    let occupiedSeats = 0;
    let standard = 0;
    let kids = 0;
    let student = 0;
    while (movie !== 'Finish') {
        let spaces = Number(input[index++]);
        let type = input[index++];
        let sold = 0;
        while (type !== 'End') {
            switch (type) {
                case 'kid':
                    kids++;
                    break;
                case 'standard':
                    standard++;
                    break;
                case 'student':
                    student++;
                    break;
            }
            occupiedSeats++;
            sold++;
            if (sold >= spaces) {
                break;
            }
            type = input[index++];
        }
        console.log(`${movie} - ${((sold / spaces) * 100).toFixed(2)}% full.`);
        movie = input[index++];
    }
    console.log(`Total tickets: ${occupiedSeats}`);
    console.log(`${((student / occupiedSeats) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / occupiedSeats) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kids / occupiedSeats) * 100).toFixed(2)}% kids tickets.`);
}
cinema(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
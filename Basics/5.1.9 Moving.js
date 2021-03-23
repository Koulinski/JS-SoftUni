function moving(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let totalSpace = lenght * width * heigth;
    let sum =0;
    let index = 3;
    let command = input[index];

    while (command !== 'Done') {
let currentCubic = Number(command);
sum+=currentCubic;
if (sum > totalSpace) {
    console.log(`No more free space! You need ${sum - totalSpace} Cubic meters more.`);
    break;
}
command = input[++index];
    }
if (command === 'Done') {
    console.log(`${totalSpace - sum} Cubic meters left.`);
}

//console.log(totalSpace);
}
moving([10, 10, 2, 20, 20, 20, 20, 122])
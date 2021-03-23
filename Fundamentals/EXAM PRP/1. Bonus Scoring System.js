function bonusScore(array) {
    array = array.map(Number);
    let students = array.shift();
    let lectures = array.shift();
    let bonusInt = array.shift();
    let totalBonus = 0;
    let score = [];

    for (const el of array) {
        totalBonus = (el / lectures * (5 + bonusInt));
        score.push(Math.round(totalBonus));
    }
    let max = score.indexOf(Math.max(...score));

    console.log(`Max Bonus: ${Math.max(...score)}.`);
    console.log(`The student has attended ${array[max]} lectures.`);
}
 bonusScore(['5', '25', '30', '12', '19', '24', '16', '20']);
// bonusScore(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
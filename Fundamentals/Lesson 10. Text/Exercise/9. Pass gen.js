function fml2([first, second, word]) {

    let pass = first + second;
    counter = 0;
    base = word.length;

    let isVowel = (x) => 'aeiou'.indexOf(x.toLowerCase()) !== -1;

    for (let i = 0; i < pass.length; i++) {
        if (isVowel(pass[i])) {
            pass = pass.substring(0, i) + word[counter % base].toUpperCase() + pass.substring(i + 1);
            counter++;
        }

    }
    return `Your generated password is ${pass.split('').reverse().join('')}`
}
console.log(fml2(['ilovepizza', 'ihatevegetables', 'orange']));
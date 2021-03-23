function activationKeys(arr) {

    let abc = arr.shift();
    //console.log(typeof abc);

    while (arr[0] !== 'Generate') {
        let [comm, dir, first, second] = arr.shift().split('>>>');

        if (comm === 'Contains') {
            if (abc.includes(dir) === true) {
                console.log(`${abc} contains ${dir}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (comm === 'Flip') {
            if (dir === 'Lower') {
                first = Number(first);
                second = Number(second);
                let cut = abc.substring(first, second);
                abc = abc.replace(cut, cut.toLowerCase());
                console.log(abc);


            } else {
                first = Number(first);
                second = Number(second);
                let cut = abc.substring(first, second);
                abc = abc.replace(cut, cut.toUpperCase());
                console.log(abc);
            }
        } else if (comm === 'Slice') {
            dir = Number(dir);
            first = Number(first);
            ab = abc.slice(dir, first);
            abc = abc.replace(ab, '');
            console.log(abc);
        }
    }
console.log(`Your activation key is: ${abc}`);
}
/* activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]); */

  activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]);
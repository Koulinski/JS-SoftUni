function fml(input) {
    let letter = input.shift().split(' ');
    let words = input.shift();

    for (let el of letter) {
        let index = letter.indexOf(el);
        if (el.startsWith('_') && el.endsWith('_')) {
            for (let w of words) {
                if (el.length === w.length) {
                    letter.splice(index, 1, w);
                }
            }
        } else if (el.startsWith('_')) {
            let missing = el.substring(el.length, el.length - 1);
            el = el.substring(0, el.length - 1);
            for (let w of words) {
                if (el.length === w.length) {
                    letter.splice(index, 1, w+missing);
                }
            }
        }
    }
      return letter.join(' ');
}
fml(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);
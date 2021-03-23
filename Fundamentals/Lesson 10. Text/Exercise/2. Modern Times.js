function modern(text) {
    let words = text.split(' ');

    for (const word of words) {
        if (word.startsWith('#') && isOnly(word.substring(1)) && word.substring(1) !== '') {
            console.log(word.substring(1));
        }
    }

    function isOnly(w) {
        let isLetter = true;
        for (const item of w) {
            let code = item.charCodeAt();
            if (code < 65 || code > 90 && code < 97 || code > 122) {
                isLetter = false;
                break;
            }
        }
        return isLetter
    }
}
modern("Nowadays everybody uses # to tag a #special word in #socialMedia");
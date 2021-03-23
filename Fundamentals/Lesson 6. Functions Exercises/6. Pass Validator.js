function passValid(pass) {

    //first req - Password must be between 6 and 10 characters
    function charlength(str) {
        if (str.length >= 6 && str.length <= 10) {
            return '';
        } else {
            return `Password must be between 6 and 10 characters\n`
        }
    }

    //second req - Password must consist only of letters and digits
    function lettersAndDigits(str) {
        let isLetterAndDigit = true;
        for (let element of str) {
            let code = element.charCodeAt();
            if (code < 48 || code > 57 &&
                code < 65 || code > 90 &&
                code < 97 || code > 122) {
                isLetterAndDigit = false;
            }
        }
        return isLetterAndDigit ? '' : `Password must consist only of letters and digits\n`;
    }

    //third req - Password must have at least 2 digits
    function digitTwo(str) {
        let counter = 0;
        for (const el of str) {
            let code = el.charCodeAt();
            if (code >= 48 && code <= 57) {
                counter++;
            }
        }
        if (counter >= 2) {
            return '';
        } else {
            return `Password must have at least 2 digits`
        }
    }
    let result = '';
    result = charlength(pass) + lettersAndDigits(pass) + digitTwo(pass);
    return result ? result : 'Password is valid';
}

let result = passValid('logIn123');
console.log(result);
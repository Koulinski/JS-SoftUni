function equalSum(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let buffer ='';

    for (let i = a; i <= b; i++) {
        let textNum = '' + i;
        let sumOdd = 0;
        let sumEven = 0;
        for (let j = 0; j < textNum.length; j++) {
            if (j % 2 === 0) {
                sumEven+= Number(textNum[j]);
            }
            else {
                sumOdd += Number(textNum[j]);
            }
        }
       if (sumEven === sumOdd) {
           buffer += textNum + ' ';
       }
    }
    console.log(buffer);
}
equalSum(['100000', '100050'])
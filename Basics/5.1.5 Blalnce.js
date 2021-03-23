function balance(input) {
let installment = Number(input[0]);
 let index = 1;
 sum = 0;
 while (installment !== 'NoMoreMoney') {
     let amount = Number(installment);
     if (amount < 0) {
         console.log('Invalid operation!');
         break;
     }
     sum+=amount;
     console.log(`Increase: ${amount.toFixed(2)}`);
     installment = input[index];
     index++;
 }
 console.log(`Total: ${sum.toFixed(2)}`);
}
balance(['5.51', '69.42', '100', 'NoMoreMoney']);
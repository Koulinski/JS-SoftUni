    function solve(input) {
        const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
        const patternDigits = /[0-9]/g;
      
        input.slice(1).forEach(barcode => {
          if (patternBarcode.test(barcode)) {
            const productGroup = (barcode.match(patternDigits) || ['0', '0']).join('');
            console.log(`Product group: ${productGroup}`);
          } else {
            console.log('Invalid barcode');
          }
        });
      }

solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);

/* solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]); */
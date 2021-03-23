function solve(arr) { 
    arr.pop();
    let totalIncome = 0;
    arr.forEach((line) => {
        let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/gm; 
        let result = pattern.exec(line);
	if (result) {
		let currentSum = Number(result.groups.count) * Number(result.groups.price);
		console.log(`${result.groups.name}: ${result.groups.product} - ${currentSum.toFixed(2)}`);
		totalIncome += currentSum;
	}        
    });
    console.log(`Total income: ${totalIncome.toFixed(2)}`); 
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
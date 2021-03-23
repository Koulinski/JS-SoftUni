function furniturePurchase(arr) {
    let result = 'Bought furniture:';
    let sum = 0;
    for (let item of arr) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d]+)/g;
        let match = pattern.exec(item);

        if (match) {
            result += `\n${match.groups.name}`;
            sum += Number(match.groups.price) * Number(match.groups.count);
        }
    }
    result += `\nTotal money spend: ${sum.toFixed(2)}`;
    return result;
}
console.log(

    furniturePurchase(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
);
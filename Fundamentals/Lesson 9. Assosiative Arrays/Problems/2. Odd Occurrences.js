function odd(input) {
    let myMap = new Map();
    input.split(' ').forEach(el => {
        el = el.toLowerCase();
        if (!myMap.has(el)) {
            myMap.set(el, 0);
        }
        myMap.set(el, myMap.get(el) + 1);
    });
    return Array.from(myMap.keys()).filter(x => myMap.get(x) % 2 !== 0).join(' ');
}
console.log(odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
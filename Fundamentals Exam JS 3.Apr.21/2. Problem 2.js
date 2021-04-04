function secondProblem(arr) {
    let number = arr.shift();

    arr.forEach((line) => {
        let pattern = /^(\$|%)(?<tag>[A-Z][a-z]{2,})\1:( )((\[(?<f>[0-9]+)\])\|(\[(?<s>[0-9]+)\])\|(\[(?<t>[0-9]+)\])([\|]))$/;
        let result = pattern.exec(line);
        if (result) {
            let word = [];
            let first = String.fromCharCode(result.groups.f);
            word.push(first);
            let second = String.fromCharCode(result.groups.s);
            word.push(second);
            let third = String.fromCharCode(result.groups.t);
            word.push(third);
            console.log(`${result.groups.tag}: ${word.join('')}`);
        }
        else {
            console.log(`Valid message not found!`);
        }
    });

}
secondProblem(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
]);
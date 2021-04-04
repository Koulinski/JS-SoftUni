function thirdProblem(arr) {
    let limit = Number(arr.shift());
    let registry = {};

    for (const el of arr) {
        let [comm, name, first, second] = el.split('=');

        if (comm === 'Statistics') {
            break;
        } else if (comm === 'Add') {
            first = Number(first);
            second = Number(second);
            if (!registry.hasOwnProperty(name)) {
                registry[name] = {
                    first,
                    second
                }
            }

        } else if (comm === 'Message') {
            let firstUser = registry[name];
            let secondUser = registry[first];
            if (registry.hasOwnProperty(name) && registry.hasOwnProperty(first)) {
                firstUser.first++;
                secondUser.second++;
                if (firstUser.first + firstUser.second >= limit) {
                    console.log(`${name} reached the capacity!`);
                    delete registry[name];
                }
                if (secondUser.first + secondUser.second >= limit) {
                    console.log(`${first} reached the capacity!`);
                    delete registry[first];
                }
            }

        } else if (comm === 'Empty') {
            if (registry.hasOwnProperty(name)) {
                delete registry[name];
            } else if (name === 'All') {
                registry = {};
            }
        }
    }

    function sortedObj(a, b) {
        let [name, sent] = a;
        let [nameB, sentB] = b;
        let result = sentB.second - sent.second;

        if (result === 0) {
            return name.localeCompare(nameB);
        }
        return result;
    }
    let sorted = Object.entries(registry).sort(sortedObj);

    console.log(`Users count: ${Object.keys(registry).length}`);

    for (const [name, stats] of sorted) {
        let {
            first,
            second
        } = stats;
        console.log(`${name} - ${first+ second}`);
    }
}
/* thirdProblem(["10",
    "Add=Mark=5=4",
    "Add=Clark=3=5",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Statistics"
]); */

thirdProblem(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"
]);
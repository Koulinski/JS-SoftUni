function solve([string]) {
    const journal = {};
 
    for (const index in string) {
        const char = string[index];
        journal[char] = (journal[char] || []).concat(index);
    }
 
    Object.entries(journal).forEach(([char, keys]) => {
        console.log(`${char}:${keys.join('/')}`);
    });
}
solve(['abababa']);
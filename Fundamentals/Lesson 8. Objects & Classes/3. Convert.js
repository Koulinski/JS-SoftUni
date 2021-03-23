function convo(a) {
    let person = JSON.parse(a);
    let entries = Object.entries(person);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
convo({

})
function phoneBook(input) {
    let phone = {};
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phone[name] = number;
    }
    for (let key in phone) {
      console.log(`${key} -> ${phone[key]}`);
    }
}
phoneBook(['Tim 089745', 'Alex 098765', 'Jones 0986421']);
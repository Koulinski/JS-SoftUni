function printCharacter(input) {
    let text = String(input);
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      console.log(letter);
    }
  }
  printCharacter('softuni')
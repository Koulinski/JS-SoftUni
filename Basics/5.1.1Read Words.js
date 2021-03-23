function readWords(input) {
    
    let index = 0;
    while (input[index] !== "Stop") {
        console.log(input[index]);
        index++;
        
    }
}
readWords(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop', 'AfterStop'])
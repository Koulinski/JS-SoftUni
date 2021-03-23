function savingPrivateRyan(path) {
    let periodIndex = path.lastIndexOf('.');
    let extention = path.substring(periodIndex + 1);

    let lastLine = path.lastIndexOf('\\');
    let fileName = path.substring(lastLine + 1, periodIndex);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);
}
console.log(savingPrivateRyan('C:\\Internal\\training-internal\\Template.pptx'));
function splitS(input) {
    return input.split(/(?=[A-Z])/).join(', ')
}
splitS('HoldTheDoor');
function mountainWalk(input) {
    let groups = Number(input.shift());
    let musalaCounter = 0;
    let monblankCounter = 0;
    let kilimangaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let totalCounter = 0;

    for (let i = 1; i <= groups; i++) {
        let claimers = Number(input.shift());
        if (claimers <= 5) {
            musalaCounter += claimers;
        }
        if (claimers >= 6 && claimers <= 12) {
            monblankCounter += claimers;
        }
        if (claimers >= 13 && claimers <= 25) {
            kilimangaroCounter += claimers;
        }
        if (claimers >= 26 && claimers <= 40) {
            k2Counter += claimers;
        }
        if (claimers >= 41) {
            everestCounter += claimers;
        }
    }
    totalCounter = musalaCounter + monblankCounter + kilimangaroCounter + k2Counter + everestCounter;
    console.log(`${(((musalaCounter / totalCounter) * 100).toFixed(2))}%`);
    console.log(`${(((monblankCounter / totalCounter) * 100).toFixed(2))}%`);
    console.log(`${(((kilimangaroCounter / totalCounter) * 100).toFixed(2))}%`);
    console.log(`${(((k2Counter / totalCounter) * 100).toFixed(2))}%`);
    console.log(`${(((everestCounter / totalCounter) * 100).toFixed(2))}%`);
}
//mountainWalk(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78'])
mountainWalk(['5', '25', '41', '31', '250', '6'])
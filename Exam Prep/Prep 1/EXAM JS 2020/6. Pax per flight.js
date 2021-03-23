function paxPerFlight(input) {

    let numOfAirlines = Number(input[0]);
    let index = 1;
    

    for (let i = 1; i <= numOfAirlines; i++) {
        let airlineName = input[index++];
        let flightCounter = 0;
        let sumOfPax = 0;
        let average = 0;
        let command = input[index];

        while (command !== 'Finish') {
            if (command === 'Finish') {
                break;
            }
            command = Number(input[index]);
            sumOfPax += command;
            flightCounter++;

            
           
            command = input[++index];
        }
        
        average = sumOfPax / flightCounter;
        average = Math.floor(average);
       // console.log(average);
        console.log(`${airlineName}: ${average} passengers.`);
        command = input[index++];
    }


}
paxPerFlight(['3', 'WizzAir', '180', '230', '100', 'Finish', 'BulgariaAir', '50', '60', '90', 'Finish', 'Lufthansa', '260', '320', 'Finish'])
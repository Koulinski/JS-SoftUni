async function getInfo() {
    //const buttonSubmit = document.getElementById('submit');
    const valueTyped = document.getElementById('stopId');
    let id = valueTyped.value;
    busStopName = document.getElementById('stopName');

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${id}`);
        const data = await response.json();

        busStopName.textContent = data.name;

        let result = Object.entries(data.buses);

        const busesUl = document.getElementById('buses');
        busesUl.innerHTML = '';

        for (const key of result) {
            let [bus, time] = key;
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            busesUl.appendChild(li);
        }
        valueTyped.value = '';
    } catch (error) {
        busStopName.textContent = 'Error';
        valueTyped.value = '';
    }
}
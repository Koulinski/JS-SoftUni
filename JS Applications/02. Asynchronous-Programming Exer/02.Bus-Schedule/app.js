function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoSpan = document.querySelector('#info span');
    let id = {
        next: 'depot'
    };

    async function depart() {

        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${id.next}`);
        const data = await response.json();

        departBtn.disabled = true;
        arriveBtn.disabled = false;

        id = data;

        infoSpan.textContent = `Next stop ${id.name}`;
    }

    async function arrive() {

        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoSpan.textContent = `Arriving at ${id.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
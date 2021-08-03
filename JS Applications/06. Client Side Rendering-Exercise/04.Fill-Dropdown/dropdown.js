import { render, html } from 'https://unpkg.com/lit-html?module';

const selectTemplate = (list) => html`
<select id="menu">
    ${list.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>`;


const host = 'http://localhost:3030/jsonstore/advanced/dropdown';
const main = document.querySelector('div');
const input = document.getElementById('itemText');
initialize();

async function initialize() {
    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list));

    const response = await fetch(host);
    const data = await response.json();
    const list = Object.values(data);

    update(list);
}

function update(list) {
    const result = selectTemplate(list);
    render(result, main);
}

async function addItem(ev, list) {
    ev.preventDefault();

    const item = {
        text: input.value
    };

    const response = await fetch(host, {
        method: 'post',
        headers: { 'content-type': 'appliccation/json' },
        body: JSON.stringify(item)
    });

    const result = await response.json();

    list.push(result);

    update(list);
}
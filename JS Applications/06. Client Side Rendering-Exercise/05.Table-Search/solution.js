import { render, html } from 'https://unpkg.com/lit-html?module';

const tableRender = (student, select) => html`
   <tr class=${select ? 'select' : '' }>
      <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
   </tr>`;

const tbody = document.querySelector('tbody');
const input = document.getElementById('searchField');
const host = 'http://localhost:3030/jsonstore/advanced/table';

start();

async function start() {
   document.getElementById('searchBtn').addEventListener('click', () => {
      update(list, input.value);
   });
   const response = await fetch(host);
   const data = await response.json();
   const list = Object.values(data);
   update(list);
};

function update(list, match = '') {
   const result = list.map(e => tableRender(e, compare(e, match)));
   render(result, tbody);
}

function compare(item, match) {
   return Object.values(item).some(v => match && v.toLowerCase().includes(match));
};
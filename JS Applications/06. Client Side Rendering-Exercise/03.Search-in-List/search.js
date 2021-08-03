import { render, html } from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js'
import townsCard from './temp.js';

//document.getElementById('towns')
render(townsCard(towns), document.getElementById('towns'));

document.getElementById('btn').addEventListener('click', (ev) => {
   search();
})
function search() {
   // TODO
   let searchList = document.querySelectorAll('ul>li');
   let input = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let sum = 0;
   for (const item of searchList) {
      if ((item.textContent).toLowerCase().includes(input.toLowerCase())) {
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         sum++;
      } else {
         item.style.fontWeight = "";
         item.style.textDecoration = '';
      }
   }
   result.textContent = `${sum} matches found`
}

/* const searchTemplate = (towns, match) => html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(t => itemTemplate(t, match))}
      </ul>
   </div>
   <input type="text" id="searchText" .value=${match}/>
   <button @click=${search}>Search</button>
   <div id="result"></div>
</article>`;

const itemTemplate = (name, match) => html`
   <li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active'  : '' }>${name}</li>`;

const main = document.body;
update();

function update(match = '') {
   const result = searchTemplate(towns, match);
   render(result, main);
}

function search(ev){
   const match = ev.target.parentNode.querySelector('input').value;
   update(match);
} */
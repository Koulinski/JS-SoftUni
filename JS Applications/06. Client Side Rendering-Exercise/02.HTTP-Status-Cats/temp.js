//import { html } from './node_modules/lit-html/lit-html.js';
import { html } from 'https://unpkg.com/lit-html?module';

const catTemplate = (data) => html`
<ul>
    ${data.map((el) => html`
    <li>
        <img src="./images/${el.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${onClick} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${el.id}>
                <h4>Status Code: ${el.statusCode}</h4>
                <p>${el.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>`;

function onClick(event) {
    const parent = event.target.parentNode;
    const details = parent.querySelector('.status').style.display;
    if (details == 'block') {
        parent.querySelector('.status').style.display = 'none';
    } else {
        parent.querySelector('.status').style.display = 'block'
    }
};

export default catTemplate;
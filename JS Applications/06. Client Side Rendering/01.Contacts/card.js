//import { html } from 'https://unpkg.com/lit-html?module';
import { html } from './node_modules/lit-html/lit-html.js';



const cardTemplate = (data) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${onClick} class="detailsBtn">Details</button>
        <div class="details" id=${data.id}>
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>`;

function onClick(event) {
    const parent = event.target.parentNode;
    const details = parent.querySelector('.details').style.display;
    if (details == 'block') {
        parent.querySelector('.details').style.display = 'none';
    } else {
        parent.querySelector('.details').style.display = 'block'
    }
}
export default cardTemplate;
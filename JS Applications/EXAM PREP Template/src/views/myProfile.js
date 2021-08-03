import { html } from '../../node_modules/lit-html/lit-html.js';

import { getmyMemes } from '../api/data.js';

const myProfileTemplate = (data) => html``;


const itemTemplate = (funnies)=>html``;

export async function myProfilePage(ctx) {
    const user = sessionStorage.getItem('userId');
    const data = await getMyItems(user);

    ctx.render(myProfileTemplate(data));
}
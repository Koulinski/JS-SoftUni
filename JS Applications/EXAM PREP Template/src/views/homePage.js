import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html``;


export async function homePage(ctx) {
    //const userId = sessionStorage.getItem('userId');
    ctx.render(homeTemplate());
}
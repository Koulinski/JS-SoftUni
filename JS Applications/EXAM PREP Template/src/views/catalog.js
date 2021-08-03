import { html } from '../../node_modules/lit-html/lit-html.js';



import { catalogData } from '../api/data.js';

const catalogTemplate = (data) => html``;


const itemTemplate = (item) => html``;

export async function catalogPage(ctx) {
    const data = await catalogData();


    ctx.render(catalogTemplate(data));
}
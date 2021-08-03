import { html } from '../../node_modules/lit-html/lit-html.js';

import { createItem } from '../api/data.js';

const createTemplate = (onSubmit) => html``;


export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();


        if (title == '' || description == '' || imageUrl == '') {
            return window.alert(`All fields are mandatory!`);
        }

        await createItem({ title, description, imageUrl });

        page.redirect('/catalog');
    }
}
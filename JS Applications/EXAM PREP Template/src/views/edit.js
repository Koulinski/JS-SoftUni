import { html } from '../../node_modules/lit-html/lit-html.js';

import { editItem, getItemDetails } from '../api/data.js';


const editTemplate = (data, onSubmit) => html``;

export async function editPage(ctx) {
    const memeId = ctx.params.id;

    const data = await getItemDetails(memeId);

    ctx.render(editTemplate(data, onSubmit));

    //await editMeme(data, onSubmit);


    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        if (title == '' || description == '' || imageUrl == '') {
            return alert('please fill in all fileds!');
        }

        await editItem(data._id, { title, description, imageUrl });

        e.target.reset();

        ctx.page.redirect('/details/' + data._id);
    }
}
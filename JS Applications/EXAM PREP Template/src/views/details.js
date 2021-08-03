import { html } from '../../node_modules/lit-html/lit-html.js';



import { getItemDetails, deleteItem } from '../api/data.js';

const deatilsTemplate = (data, isOwner, onDelete) => html``;


export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await getItemDetails(id);

    const userId = sessionStorage.getItem('userId');

    ctx.render(deatilsTemplate(data, data._ownerId == userId, onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete this?`);

        if (confirmed) {
            await deleteItem(data._id);
            ctx.page.redirect('/catalog');
        }
    }
}
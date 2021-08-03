import { html } from '../../node_modules/lit-html/lit-html.js';



import { getItemDetails, deleteItem } from '../api/data.js';

const deatilsTemplate = (data, isOwner, onDelete, onEdit) => html`
<section id="meme-details">
    <h1>Meme Title: ${data.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${data.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${data.description}
            </p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner ? html` <a class="button warning" href=${`/edit/${data._id}`}>Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : ''}


        </div>
    </div>
</section>`;


export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await getItemDetails(id);

    const userId = sessionStorage.getItem('userId');

    ctx.render(deatilsTemplate(data, data._ownerId == userId, onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete this meme?`);

        if (confirmed) {
            await deleteItem(data._id);
            ctx.page.redirect('/allMemes');
        }
    }
}
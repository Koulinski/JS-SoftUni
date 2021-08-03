import { html } from '../../node_modules/lit-html/lit-html.js';
import { notify } from '../notification.js';




import { editItem, getItemDetails } from '../api/data.js';


const editTemplate = (data, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${data.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${data.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

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


        try {
            if (title == '' || description == '' || imageUrl == '') {
                throw new Error('please fill in all fileds!');
            }

            await editItem(data._id, { title, description, imageUrl });

            e.target.reset();

            ctx.page.redirect('/details/' + data._id);
        } catch (err) {
            notify(err.message);
        }
    }
}
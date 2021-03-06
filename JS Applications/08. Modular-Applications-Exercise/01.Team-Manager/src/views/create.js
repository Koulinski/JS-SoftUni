import { html } from "../../node_modules/lit-html/lit-html.js";

import { createTeam } from '../api/data.js';

const createTemplate = (onSubmit, errorMsg) => html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${onSubmit} id="create-form" class="main-form pad-large">
            ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>`;


export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();


        const formData = new FormData(ev.target);

        const name = formData.get('name').trim();
        const logoUrl = formData.get('logoUrl').trim();
        const description = formData.get('description').trim();

        [...ev.target.querySelectorAll('input')].forEach(i => i.disabled = true);


        try {
            if (name.length <= 3) {
                throw new Error('Team name must be at least 4 characters long.');
            }
            if (logoUrl == '') {
                throw new Error('You must provide an Url for your logo.');
            }
            if (description.length <= 9) {
                throw new Error('Team description must be at least 10 characters long.');
            }

            const team = await createTeam({ name, logoUrl, description });

            ev.target.reset();

            ctx.page.redirect('/details/' + team._id);

        } catch (err) {
            ctx.render(createTemplate(onSubmit, err.message));
        } finally {
            [...ev.target.querySelectorAll('input')].forEach(i => i.disabled = false);

        }
    }
}
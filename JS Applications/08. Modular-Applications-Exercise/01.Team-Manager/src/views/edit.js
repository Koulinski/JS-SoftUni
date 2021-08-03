import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getTeamById, editTeam } from '../api/data.js';
import { loaderTemplate } from "./common/loader.js";




const editTemplate = (data, onSubmit, errorMsg) => html`
<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${onSubmit} id="edit-form" class="main-form pad-large">
            ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
            <label>Team name: <input type="text" name="name" .value=${data.name}></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${data.logoUrl}></label>
            <label>Description: <textarea name="description" .value=${data.description}></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
</section>`;


export async function editPage(ctx) {
    const teamId = ctx.params.id;
    // const data = await getTeamById(userId);

    ctx.render(until(populateTemplate()), loaderTemplate());

    async function populateTemplate() {
        const data = await getTeamById(teamId);
        return editTemplate(data, onSubmit);

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
                await editTeam(teamId, { name, logoUrl, description });

                ev.target.reset();

                ctx.page.redirect('/details/' + data._id);
            } catch (err) {
                ctx.render(editTemplate(data, onSubmit, err.message));
            } finally {
                [...ev.target.querySelectorAll('input')].forEach(i => i.disabled = false);
            }
        }
    }
}


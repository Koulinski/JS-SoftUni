import { login } from '../api/data.js'
import { html } from '../../node_modules/lit-html/lit-html.js';



const loginTemplate = (onSubmit) => html``;


export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            return alert('All fileds are mandatory!');
        }

        await login(email, password);

        ctx.setUserNav();
        ctx.page.redirect('/catalog');

    }
}
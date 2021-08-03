import { register } from '../api/data.js'
import { html } from '../../node_modules/lit-html/lit-html.js';


const registerTemplate = (onSubmit) => html``;


export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();
        const gender = formData.get('gender');

        if (password != repeatPass) {
            return alert('Passwords do not match!');
        }

        if (username == '' || email == '' || password == '' || repeatPass == '') {
            return alert('All fileds are mandatory!');
        }

        await register(username, email, password, gender);

        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }
}
import { html } from 'https://unpkg.com/lit-html?module';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit, errorMsg) => html`
<div id="container">
    <div id="exercise">
        <div class="wrapper">
            <div class="card-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Register</h2>
                        <form @submit=${onSubmit} action="/register" method="post">
                            ${errorMsg ? html`<div class="form-group">
                                <p>${errorMsg}</p>
                            </div>` : ''}
                            <label>E-mail: <input type="text" name="email"></label>
                            <label>Password: <input type="password" name="password"></label>
                            <label>Repeat: <input type="password" name="rePass"></label>
                            <button>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;


export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        if (email == '' || password == '' || rePass == '') {
            return ctx.render(registerTemplate(onSubmit, 'All fields are mandatory'));
        }
        if (password != rePass) {
            return ctx.render(registerTemplate(onSubmit, 'Passwords do not match'));
        }

        await register(email, password);

        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}
import { html } from 'https://unpkg.com/lit-html?module';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit, errorMsg, invalidEmail, invalidPass) => html`
<div id="container">
    <div id="exercise">
        <div class="wrapper">
            <div class="card-wrapper">
                <div class="row">
                    <div class="col-md-12">

                        <h2>Login</h2>
                        <form @submit=${onSubmit} action="/login" method="post">
                            ${errorMsg ? html`<div class="form-group">
                                <p>${errorMsg}</p>
                            </div>` : ''}
                            <label>E-mail: <input class=${'form-control' + (invalidEmail ? ' is-invalid' : '' )}
                                    type="text" name="email"></label>
                            <label>Password: <input class=${'form-control' + (invalidPass ? ' is-invalid' : '')}
                                    type="password" name="password"></label>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            return ctx.render(loginTemplate(onSubmit, 'All fields are mandatory', email == '', password == ''));
        }
        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}
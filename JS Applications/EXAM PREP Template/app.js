
import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { catalogPage } from './src/views/catalog.js';
import { editPage } from './views/edit.js';
import { myProfilePage } from './views/myProfile.js';
import { homePage } from './views/homePage.js';

import { logout } from './api/data.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logoutFunc);

page('/homePage', decorateContext, homePage);
page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/myProfile', decorateContext, myProfilePage);

page.start('/homePage');

setUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId !== null) {
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}

async function logoutFunc() {
    await logout();
    setUserNav();
    page.redirect('/homePage');
}
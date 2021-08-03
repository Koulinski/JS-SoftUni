import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';


import { homePage } from './src/views/home.js';
import { browsePage } from './src/views/browse.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';
import { myTeamPage } from './src/views/myteam.js';
import { editPage } from './src/views/edit.js';
import { createPage } from './src/views/create.js';
import { detailsPage } from './src/views/details.js';

import { logout } from './src/api/data.js';


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logoutFunc);

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/browse', decorateContext, browsePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/myteam', decorateContext, myTeamPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);




setUserNav();

page.start();


function decorateContext(ctx, next) {
    ctx.setUserNav = setUserNav;
    ctx.render = (content) => render(content, main);
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        [...document.querySelectorAll('nav > a.user')].forEach(a => a.style.display = 'block');
        [...document.querySelectorAll('nav > a.guest')].forEach(a => a.style.display = 'none');

    } else {
        [...document.querySelectorAll('nav > a.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('nav > a.guest')].forEach(a => a.style.display = 'block');
    }
}


async function logoutFunc() {
    await logout();
    setUserNav();
    page.redirect('/');
}
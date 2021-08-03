import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';

//import all the created pages.js related to the html skeleton created for that page
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myFurniturePage } from './views/myFurniture.js';
import { registerPage } from './views/register.js';

//select the place to push the html created
const main = document.querySelector('.container');

//set up navigation paths
page('/', decorateContext, dashboardPage);
page('/myFurniture', decorateContext, myFurniturePage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);

//setting up the logout
document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
})

//call setUserNav
setUserNav();

//start the page.mjs
page.start();

//call lit-html render with the context
function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

//function to set the buttons that are to be seen depending on the user/guest profile
function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}
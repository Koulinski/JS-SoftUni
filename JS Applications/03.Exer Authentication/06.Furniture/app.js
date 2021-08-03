import page from "//unpkg.com/page/page.mjs";
import { render } from 'https://unpkg.com/lit-html?module';

import {logout} from './api/data.js';
import {catalogPage} from './views/catalog.js';
import {createPage} from './views/create.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';

const main = document.querySelector('main');

page('/', decorateContext, catalogPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/create', decorateContext, createPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
  await logout();
  setUserNav();
  page.redirect('/');
})
setUserNav();

page.start();


function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.setUserNav = setUserNav;
  next();
}

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
import page from "//unpkg.com/page/page.mjs";
import { render } from 'https://unpkg.com/lit-html?module';


import { myCreatePage } from './src/create.js';
import {comment} from './src/getPosts.js'


const main = document.querySelector('.container');

page('/', decorateContext, myCreatePage);
page('/:id', decorateContext, comment);
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}
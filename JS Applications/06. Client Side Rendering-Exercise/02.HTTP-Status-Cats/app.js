//import { render } from './node_modules/lit-html/lit-html.js';
import catTemplate from './temp.js';
import { cats } from './catSeeder.js'
import { render } from 'https://unpkg.com/lit-html?module';

const section = document.getElementById('allCats');

render(catTemplate(cats), section);
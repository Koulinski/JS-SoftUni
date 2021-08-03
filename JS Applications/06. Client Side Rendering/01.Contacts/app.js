import { render } from './node_modules/lit-html/lit-html.js';
//import { render } from 'https://unpkg.com/lit-html?module';
import cardTemplate from './card.js';
import { contacts } from './contacts.js';


const container = document.getElementById('contacts');
const result = contacts.map(cardTemplate);
render(result, container);
import { render } from 'https://unpkg.com/lit-html?module';
import templateUl from './div.js';

document.querySelector('.content').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    render(templateUl(formData.get('towns').split(', ')), document.getElementById('root'));
    //ev.target.reset();
});

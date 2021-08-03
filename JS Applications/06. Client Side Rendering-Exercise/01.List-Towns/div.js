import { html } from 'https://unpkg.com/lit-html?module';


const templateUl = (data) => html`
<ul>
    ${data.map((el) => html`<li>${el}</li>`)}
</ul>
`;

export default templateUl;
import { html } from 'https://unpkg.com/lit-html?module';

const townsCard = (towns) => html`
<ul>
    ${towns.map((el) => html`<li>${el}</li>`)}
</ul>
`;
export default townsCard;
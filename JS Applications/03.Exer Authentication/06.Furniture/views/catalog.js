import { html } from 'https://unpkg.com/lit-html?module';
import { getFurniture } from '../api/data.js';


const catalogTemplate = (data) => html`
<div class="wrapper">
    <div class="card-wrapper">
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Decoration factor</th>
                            <th scope="col">Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(itemTemplate)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`;


const itemTemplate = (furniture) => html`
<tr>
    <td>
        <img src=${furniture.img}>
    </td>
    <td>
        <p>${furniture.name}</p>
    </td>
    <td>
        <p>${furniture.price}</p>
    </td>
    <td>
        <p>${furniture.factor}</p>
    </td>
    <td>
        <input type="checkbox" disabled />
    </td>
</tr>`;

export async function catalogPage(ctx) {
    const data = await getFurniture();

    ctx.render(catalogTemplate(data));
}
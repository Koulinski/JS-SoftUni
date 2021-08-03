import { html } from 'https://unpkg.com/lit-html?module';
import { createFurniture, getFurniture, postFurniture, getmyStuff, deleteFurniture } from '../api/data.js';


const createTemplate = (data, onSubmit, sendPostRequest, getTheFurnitue) => html`
<div id="container">
    <div id="exercise">
        <div class="wrapper">
            <div class="card-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Create Product</h2>
                        <form @submit=${onSubmit} action="" method="post">
                            <label>Name: <input type="text" name="name"></label>
                            <label>Price: <input type="text" name="price"></label>
                            <label>Factor: <input type="text" name="factor"></label>
                            <label>Img: <input type="text" name="img"></label>
                            <button>Create</button>
                        </form>
                        <hr>
                        ${data.map(restTemplate)}
                        <button @click=${sendPostRequest}>Buy</button>
                        <hr>
                        <div class="orders">
                            <p>Bought furniture: <span id="itemsBouth"></span></p>
                            <p>Total price: <span id="price"></span></p>
                            <button @click=${getTheFurnitue}>All orders</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;


const restTemplate = (item) => html`
<table class="table">
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Decoration factor</th>
            <th>Mark</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <img src=${item.img}>
            </td>
            <td>
                <p>${item.name}</p>
            </td>
            <td>
                <p>${item.price}</p>
            </td>
            <td>
                <p>${item.factor}</p>
            </td>
            <td>
                <input type="checkbox" @change=${checked} />
            </td>
        </tr>
    </tbody>
</table>`;



const obj = {
    items: [],
    prices: 0
}
function checked(ev) {
    const name = ev.target.parentNode.parentNode;
    let nameItem = name.children[1].children[0].textContent;
    let price = name.children[2].children[0].textContent;
    price = Number(price);
    obj.items.push(nameItem);
    obj.prices += price;

}

export async function createPage(ctx) {
    const data = await getFurniture();

    ctx.render(createTemplate(data, onSubmit, sendPostRequest, getTheFurnitue));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const name = formData.get('name');
        const price = formData.get('price');
        let factor = formData.get('factor');
        let img = formData.get('img');

        await createFurniture({ name, price, factor, img });

        ctx.page.redirect('create');
    }

    async function sendPostRequest(ev) {
        ev.preventDefault();

        await postFurniture(obj);
    }
    async function getTheFurnitue() {
        let stuff = await getmyStuff();

        let itemsToAppend = stuff[0].items.join('');
        let priceToAppend = stuff[0].prices;

        let itemsBought = document.getElementById('itemsBouth');
        itemsBought.textContent = itemsToAppend;

        let priceItem = document.getElementById('price');
        priceItem.textContent = `${priceToAppend} $`;
/* 
       delete obj.items;
       delete obj.prices; */
    }

}

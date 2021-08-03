import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyItems } from '../api/data.js';

const myProfileTemplate = (data) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${`/images/${sessionStorage.getItem('gender')}.png`}> <div
            class="user-content">
        <p>Username: ${sessionStorage.getItem('username')}</p>
        <p>Email: ${sessionStorage.getItem('email')}</p>
        <p>My memes count: ${data.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
       ${data.length > 0 ? data.map(memeTemplate) : html`<p class="no-memes">No memes in database.</p>`}

        <!-- Display : If user doesn't have own memes  -->
        
    </div>
</section>`;


const memeTemplate = (funnies)=>html`
<div class="user-meme">
            <p class="user-meme-title">${funnies.title}</p>
            <img class="userProfileImage" alt="meme-img" src=${funnies.imageUrl}>
            <a class="button" href=${`/details/${funnies._id}`}>Details</a>
        </div>`;

export async function myMemesPage(ctx) {
    const user = sessionStorage.getItem('userId');
    const data = await getMyItems(user);
    //console.log(data);

    ctx.render(myProfileTemplate(data));
}
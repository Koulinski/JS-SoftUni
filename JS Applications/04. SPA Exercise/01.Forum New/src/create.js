import { html } from 'https://unpkg.com/lit-html?module';
import { createPost, getPost } from './data.js';

let today = new Date();
let hours = today.getHours();
let min = String(today.getMinutes()).padStart(2, '0');;
let sec = String(today.getSeconds()).padStart(2, '0');;
let mil = today.getMilliseconds();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd + 'T' + hours + ':' + min + ':' + sec + ':' + mil + 'Z';


const createPosts = (dataArr, onSubmit) => html`
<main>
    <div class="new-topic-border">
        <div class="header-background">
            <span>New Topic</span>
        </div>
        <form @submit=${onSubmit}>
            <div class="new-topic-title">
                <label for="topicName">Title <span class="red">*</span></label>
                <input type="text" name="topicName" id="topicName">
            </div>
            <div class="new-topic-title">
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <div class="new-topic-content">
                <label for="postText">Post <span class="red">*</span></label>
                <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
            </div>
            <div class="new-topic-buttons">
                <button class="cancel">Cancel</button>
                <button class="public">Post</button>
            </div>
        </form>
    </div>
    <div class="topic-title">
        <div class="topic-container">
            ${dataArr.map(topic)}
        </div>
</main>`;

const topic = (p) => html`
<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href=${`/${p._id}`} class="normal">
            <h2>${p.topicName}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${today}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${p.username}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>`;

export async function myCreatePage(ctx) {
    // const id = ctx.params.id;
    const data = await getPost();
    let dataArr = Object.values(data);


    ctx.render(createPosts(dataArr, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const topicName = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');

        if (topicName == '' || username == '' || post == '') {
            return alert(`All fields are mandatory`);
        }

        await createPost({ topicName, username, post });
        ctx.page.redirect('/');
        ev.target.reset();
    }

}


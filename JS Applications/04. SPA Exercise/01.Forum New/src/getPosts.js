import { html } from 'https://unpkg.com/lit-html?module';
import { getComments, getPostById, postComments } from './data.js'


let today = new Date();
let hours = today.getHours();
let min = String(today.getMinutes()).padStart(2, '0');;
let sec = String(today.getSeconds()).padStart(2, '0');;
let mil = today.getMilliseconds();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd + 'T' + hours + ':' + min + ':' + sec + ':' + mil + 'Z';


const renderPost = (postz, commentSubmit, comments, hasComments) => html`
<div class="comment">
    <div class="header">
        <img src="/static/profile.png" alt="avatar">
        <p><span>${postz.username}</span> posted on <time>${today}</time></p>

        <p class="post-content">${postz.post}</p>
    </div>
    ${hasComments ? comments.map(commentsSection) : ''}

    <div class="answer-comment">

        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form @submit=${commentSubmit}>
                <input type="hidden" name="id">
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>
</div>`;


const commentsSection = (ppp) => html`
    <div id="user-comment">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${ppp.user}</strong> commented on <time>${today}</time></p>
                <div class="post-content">
                    <p>${ppp.text}</p>
                </div>
            </div>
        </div>
    </div>`;

export async function comment(ctx) {
    const id = ctx.params.id;
    const postz = await getPostById(id);

    const gettingAllTheComments = await getComments();
    let gettingValues = Object.values(gettingAllTheComments);

    let comments;
    if (gettingValues.length >= 1) {
        comments = [...gettingValues].filter(el => el.topicId == postz._id);
    }

    ctx.render(renderPost(postz, commentSubmit, comments, gettingValues.length >= 1));

    async function commentSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const text = formData.get('postText');
        const user = formData.get('username');
        let topicId = formData.get('id');
        topicId = postz._id;

        if (user == '' || text == '') {
            return alert('Username is mandatory!');
        }
        await postComments({ text, user, topicId });
        ev.target.reset();
        ctx.page.redirect(`/${id}`);
    }
}
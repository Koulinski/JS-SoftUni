function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function getPosts() {
    const response = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
    const data = await response.json();
    const select = document.getElementById('posts');
    Object.values(data).map(createPost).forEach(el => select.appendChild(el));
}

function createPost(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}

function displayPost() {
    const postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);
}

async function getCommentsByPostId(postId) {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postUrl = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    //const postResponse = await fetch(postUrl);
    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    // const commentsResponse = await fetch(commentsUrl);
    const commentsData = await commentsResponse.json();

    const comments = Object.values(commentsData).filter(c => c.postId == postId);

    comments.map(createComment).forEach(el => commentsUl.appendChild(el));
}

function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}
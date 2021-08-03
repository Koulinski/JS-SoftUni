import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export async function getPost() {
    return await api.get(host + '/jsonstore/collections/myboard/posts/');
}


export async function createPost(data) {
    return await api.post(host + '/jsonstore/collections/myboard/posts', data);
}

export async function getPostById(id) {
    return await api.get(host + '/jsonstore/collections/myboard/posts/' + id);
}

export async function getComments() {
    return await api.get(host + '/jsonstore/collections/myboard/comments');
}

export async function postComments(data){
    return await api.post(host + '/jsonstore/collections/myboard/comments', data);
}
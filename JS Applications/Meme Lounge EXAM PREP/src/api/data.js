import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function createItem(meme) {
    return await api.post(host + '/data/memes', meme);
}

export async function getItems() {
    return await api.get(host + '/data/memes?sortBy=_createdOn%20desc');
}

export async function getItemDetails(id) {
    return await api.get(host + '/data/memes/' + id);
}

export async function deleteItem(id) {
    return await api.del(host + '/data/memes/' + id);
}

export async function editItem(id, meme) {
    return await api.put(host + '/data/memes/' + id, meme);
}

export async function getMyItems(userId){
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}
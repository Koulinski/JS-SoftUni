import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function createItem(meme) {
    return await api.post(host + '', meme);
}

export async function getItem() {
    return await api.get(host + '');
}

export async function getItemDetails(id) {
    return await api.get(host + '' + id);
}

export async function deleteItem(id) {
    return await api.del(host + '' + id);
}

export async function editItem(id, meme) {
    return await api.put(host + '' + id, meme);
}

export async function getMyItems(userId){
    return await api.get(host + ``)
}

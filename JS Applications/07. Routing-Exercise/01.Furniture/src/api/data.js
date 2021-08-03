import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement application specific requests

//get all furniture
export async function getFurniture() {
    return await api.get(host + '/data/catalog');
}


//get specific furniture
export async function getFurnitureById(id) {
    return await api.get(host + '/data/catalog/' + id);
}

//get owner created furniture
export async function getMyFurniture() {
    const user = sessionStorage.getItem('userId');
    return await api.get(`${host}/data/catalog?where=_ownerId%3D%22${user}%22`)
}

// create furniture request
export async function createFurniture(data) {
    return await api.post(host + '/data/catalog', data);
}

export async function editFurniture(id, data) {
    return await api.put(host + '/data/catalog/' + id, data);
}

export async function deleteFurniture(id) {
    return await api.del(host + '/data/catalog/' + id);
}
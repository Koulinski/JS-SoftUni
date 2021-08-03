import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//Implement application specific requests

//get all furniture
export async function getFurniture() {
    return await api.get(host + '/data/furniture');
}

export async function postFurniture(data) {
    return await api.post(host + '/data/orders', data);
}

//get owner created furniture
/* export async function getMyFurniture() {
    const user = sessionStorage.getItem('userId');
    return await api.get(`${host}/data/orders?where=_ownerId%3D${user}`) //
} */
//get the furniture bought
export async function getmyStuff() {
    const user = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('authToken')

    const response = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D%22${user}%22`, {
        method: 'get',
        headers: {
             'Content-Type': 'application/json', 
             "X-Authorization": token
            }
    });
    const data = await response.json();
    return data;
}

// create furniture request
export async function createFurniture(data) {
    return await api.post(host + '/data/furniture', data);
}

export async function deleteFurniture() {
    const user = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('authToken')

    const response = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D%22${user}%22`, {
        method: 'delete',
        headers: {
             'Content-Type': 'application/json', 
             "X-Authorization": token
            }
    });
    const data = await response.json();
    return data;
}
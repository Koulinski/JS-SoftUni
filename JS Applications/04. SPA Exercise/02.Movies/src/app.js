
import { setupLogin, showLogin } from './login.js';
import { setupDetails, showDetails } from './details.js';
import { setupEdit, showEdit } from './edit.js';
import { setupCreate, showCreate } from './create.js';
import { setupRegister, showRegister } from './register.js';
import { setupHome, showHome } from './home.js';


const main = document.querySelector('main');
const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate,
    'logoutLink': logout
}
//const login = document.getElementById('form-login');

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNavigation();

showHome();

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}

function setupNavigation() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;

        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
        document.getElementById('createLink').style.display = 'inline-block';

    }
    else {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
        // document.getElementById('createLink').style.display = 'inline-block';

    }
    document.querySelector('nav').addEventListener('click', (ev) => {

        const view = links[ev.target.id];
        if (typeof view == 'function') {
            ev.preventDefault();
            view();
        }
    });
    document.getElementById('createLink').addEventListener('click', (ev) => {
        ev.preventDefault();
        showCreate();
    });
};

async function logout() {
    const token = sessionStorage.getItem('authToken');

    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token },
    });
    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');

        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
        showHome();

    }

    // const data = await response.json();
};
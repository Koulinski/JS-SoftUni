import { showHome } from "./home.js";


async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);


    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');

    if (email == '' || password == '' || repass == '') {
        return alert(`All fields are mandatory`);
    } else if (password != repass) {
        return DeviceAcceleration(`Passwords do not match`);
    }


    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
        ev.target.reset();
        const data = await response.json();
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);

        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;

        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');

        //  document.getElementById('createLink').style.display = 'inline-block';

        showHome();
    }
};


let main;
let section;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', onSubmit);
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}
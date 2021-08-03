function lockedProfile() {
    const input = document.getElementById('container');
    input.addEventListener('click', onClick);

    function onClick(ev) {
        let profile = ev.target.parentNode;
        if (ev.target.tagName == 'BUTTON' &&
            profile.querySelector('input[value="unlock"]:checked')) {
            let div = profile.querySelector('div');
            let visibility = div.style.display === 'block';
            div.style.display = visibility ? 'none' : 'block';
            ev.target.textContent = visibility ? 'Show more' : 'Hide it'
        }
    }
}
const main = document.getElementById('main');

async function getData() {
    const request = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);

    const data = await request.json();
    let dataArr = Object.values(data).map(arrangeData).join();
    return dataArr;
}

function arrangeData(person) {
    const div = e('div', undefined, 'profile');
    const img = e('img', undefined, 'userIcon', './iconProfile2.png', div);
    const lock = e('label', 'Lock', undefined, undefined, div);
    const buttonLock = document.createElement('INPUT');
    buttonLock.setAttribute('type', 'radio');
    buttonLock.name = 'user1Locked';
    buttonLock.value = 'lock';
    buttonLock.checked = true;
    div.appendChild(buttonLock);
    const unlock = e('label', 'Unlock', undefined, undefined, div);
    const buttonUnlock = document.createElement('INPUT');
    buttonUnlock.setAttribute('type', 'radio');
    buttonUnlock.name = 'user1Locked';
    buttonUnlock.value = 'unlock';
    buttonUnlock.checked = false;
    div.appendChild(buttonUnlock);
    const br = e('br', undefined, undefined, undefined, div);
    const firstHr = e('hr', undefined, undefined, undefined, div);
    const userName = e('label', 'Username', undefined, undefined, div);
    const userD = e('input');
    userD.setAttribute('type', 'text');
    userD.name = 'user1Locked';
    userD.value = person.username;
    userD.readOnly = true;
    userD.disabled = true;
    div.appendChild(userD);
    const hiddenDiv = e('div');
    hiddenDiv.id = 'user1HiddenFields';
    div.appendChild(hiddenDiv);
    const hiddenHr = e('hr', undefined, undefined, undefined, hiddenDiv);
    const hiddenLabel = e('label', 'Email:', undefined, undefined, hiddenDiv);
    const userEmail = e('input');
    userEmail.setAttribute('type', 'email');
    userEmail.name = 'user1Email';
    userEmail.value = person.email;
    userEmail.readOnly = true;
    userEmail.disabled = true;
    hiddenDiv.appendChild(userEmail);
    const hiddenLabelSecond = e('label', 'Age:', undefined, undefined, hiddenDiv);
    const userAge = e('input');
    userAge.setAttribute('type', 'email');
    userAge.name = 'user1Age';
    userAge.value = person.age;
    userAge.readOnly = true;
    userAge.disabled = true;
    hiddenDiv.appendChild(userAge);
    div.appendChild(hiddenDiv);
    const button = e('button', 'Show more', undefined, undefined, div);
    main.appendChild(div);
}

function e(type, text, className, img, append) {
    const el = document.createElement(type);

    if (text) {
        el.textContent = text;
    }
    if (append) {
        append.appendChild(el);
    }
    if (className) {
        el.setAttribute('class', className);
    }
    if (img) {
        el.src = img;
    }
    return el;
}
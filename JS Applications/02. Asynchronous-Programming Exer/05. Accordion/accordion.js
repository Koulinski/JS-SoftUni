let section = document.getElementById('main');

function solution() {
    fullInfo();

    //attaching the functionality to the buttons
    section.addEventListener('click', (ev) => {
        if (ev.target.tagName == 'BUTTON') {
            let target = ev.target.parentNode.parentNode.lastChild;
            let btn = ev.target;
            let text = target;
            text.style.display = text.style.display == 'none' || text.style.display == '' ? 'block' : 'none';
            btn.textContent = btn.textContent === 'More' ? 'Less' : 'More'
        }
    })
}
solution();


//send initial request for data
async function getData() {
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
    const data = await response.json();
    return data;
}

//send request by id
async function getDetails(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
    const extraData = await response.json();

    return extraData;
}

//get both requests 
async function fullInfo() {
    const heading = await getData();
    const data = Object.values(heading);


    for (const el of data) {
        const div = e('div', undefined, 'accordion');
        const secondDiv = e('div', undefined, 'head');
        const span = e('span', el.title, undefined, secondDiv);
        const button = e('button', 'More', 'button');
        button.id = el._id;
        secondDiv.appendChild(button);
        div.appendChild(secondDiv);
        const thirdDiv = e('div', undefined, 'extra');

        //get the id to set the content
        const details = await Promise.all([getDetails(el._id)]);

        //setting the content to the div
        for (const el of details) {
            const p = e('p', el.content, undefined, thirdDiv);
            div.appendChild(thirdDiv);
            section.appendChild(div);
        }
    }
}

//creator function for DOM
function e(type, text, attribute, append) {
    const el = document.createElement(type);
    if (text) {
        el.textContent = text;
    }
    if (attribute) {
        el.setAttribute('class', attribute);
    }
    if (append) {
        append.appendChild(el);
    }
    return el;
}

//creating the DOM elements function
function appendStuff(el) {
    const div = e('div', undefined, 'accordion');
    const secondDiv = e('div', undefined, 'head');
    const span = e('span', sss[0].title, undefined, secondDiv);
    const button = e('button', 'More', 'button');
    button.id = el._id;
    secondDiv.appendChild(button);
    div.appendChild(secondDiv);
    const thirdDiv = e('div', undefined, 'extra');
    const p = e('p', details[0].content, undefined, thirdDiv);
    div.appendChild(thirdDiv);
    section.appendChild(div);
}

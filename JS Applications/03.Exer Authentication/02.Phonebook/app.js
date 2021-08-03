const loadButton = document.getElementById('btnLoad');

const ulElement = document.getElementById('phonebook');

let sendButton = document.getElementById('btnCreate');

function attachEvents() {
    loadButton.addEventListener('click', getphones);
    sendButton.addEventListener('click', async () => {
        let person = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;

        if(person == '' || phone == '') {
            return alert(`All fields are mandatory!`);
        }
        await createNumber({ person, phone });

        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.textContent = `${person}: ${phone}`;
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.remove()

        })
        li.appendChild(deleteBtn);
        // ulElement.appendChild(li);
        await getphones();
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
    });
}

attachEvents();

async function getphones() {
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.lastChild);
    }
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
    const data = await response.json();

    let toWorkWith = Object.values(data);

    for (const item of toWorkWith) {
        //   console.log(item.person);
        //  console.log(item.phone);
        //   console.log(item._id);
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.textContent = `${item.person}: ${item.phone}`;
        deleteBtn.addEventListener('click', () => {
            toDelete(item._id)
            deleteBtn.parentElement.remove()
        })
        li.appendChild(deleteBtn);
        ulElement.appendChild(li);

        // console.log(toWorkWith[item]);
    }
}

async function toDelete(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: 'delete',
        body: JSON.stringify(id)
    })
    const data = await response.json()
}

async function createNumber(person) {
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook`, {
        method: 'post',
        headers: { 'Content-type': 'application.json' },
        body: JSON.stringify(person),
    });

    const data = await response.json();
}
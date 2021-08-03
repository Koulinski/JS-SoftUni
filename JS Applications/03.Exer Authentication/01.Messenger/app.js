const subButton = document.getElementById('submit');
const RefButton = document.getElementById('refresh');

const textArea = document.getElementById('messages');

function attachEvents() {
    subButton.addEventListener('click', async () => {
        let author = document.querySelector('[name="author"]').value;
        let content = document.querySelector('[name="content"]').value;

        if(author == '' || content == ''){
            return alert('Please fill in all fields');
        }
        await sendmessage({ author, content })
        document.querySelector('[name="author"]').value = '';
        document.querySelector('[name="content"]').value = '';
    });

    RefButton.addEventListener('click', getMessages);
}

attachEvents();
async function getMessages() {
    textArea.textContent = '';

    const response = await fetch(`http://localhost:3030/jsonstore/messenger`);
    const data = await response.json();

    let textToDisplay = Object.values(data);

    for (const el of textToDisplay) {

        textArea.textContent += `${el.author}: ${el.content}\n`;
    }
}

async function sendmessage(message) {

    const response = await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: 'post',
        headers: { 'Content-type': 'application.json' },
        body: JSON.stringify(message),
    });

    const data = await response.json();
}
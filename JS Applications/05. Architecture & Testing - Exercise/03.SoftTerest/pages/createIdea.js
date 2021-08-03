
let section = undefined;
let navLinkClass = undefined;

let formEl = document.getElementById('create-form');

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
}

async function getView() {

    console.log(formEl)    
    let form = new FormData(formEl);
    

    let newIdea = {
        title: form.get('title'),
        description: form.get('description'),
        img: form.get('img')
    }

    let ideaDetails = await ideaService.createIdea(newIdea);

    //let createBtn = document.querySelector('#createBtn');

    // console.log(createBtn);
    // createBtn.addEventListener('click', createIdea)
    return section;
}

function createIdea(e) {
    console.log(e)
}

let createIdeaPage = {
    initiliaze,
    getView
};

export default createIdeaPage;
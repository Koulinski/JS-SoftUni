import { render } from 'https://unpkg.com/lit-html?module';
import * as api from './data.js';
import { layoutTemplate } from './main.js'


const onSubmit = {
    'add-form': onCreateSubmit,
    'edit-form': onEditSubmit
}

const ctx = {
    list: [],
    async load() {
        ctx.list = await api.getAllBooks();
        update();
    },
    onEdit(id) {
        const book = ctx.list.find(b => b._id == id);
        update(book);
    },
    async onDelete(id) {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await api.deleteBook(id);

        }
    }
}

document.body.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    onSubmit[ev.target.id](formData, ev.target);
});

start();

async function start() {
    update();
}

function update(bookToEdit) {
    const result = layoutTemplate(ctx, bookToEdit);
    render(result, document.body);
}

async function onCreateSubmit(formData, form) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author'),
    };
    await api.createBook(book);
    form.reset();
};

async function onEditSubmit(formData, form) {
    const id = formData.get('_id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author'),
    };

    await api.updateBook(id, book);
    form.reset();
    update();
};


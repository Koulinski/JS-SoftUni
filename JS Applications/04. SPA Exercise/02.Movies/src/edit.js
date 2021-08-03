
import { onEdit } from './details.js'

let main;
let section;

//edit-movie

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();
    return data;
}

export async function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', onEdit);
}


export async function showEdit(id) {
    main.innerHTML = '';
    //section.innerHTML = '';
    main.appendChild(section);

    const movie = await getMovieById(id);
    //console.log(movie);
    section.querySelector('[name="id"]').value = movie._id;

    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.img;

    /*  section.innerHTML = '';
     main.innerHTML = '';
     main.appendChild(section);
 
     const [movie, likes, ownLike] = await Promise.all([
         getMovieById(id),
         getLikesByMovieId(id),
         getOwnLikesByMovieId(id)
     ]);
     const card = createMovieCard(movie, likes, ownLike);
     section.appendChild(card); */
}
async function request(url, option) {
    const response = await fetch(url, option);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function extractStudents() {

    const body = document.querySelector('tbody');
    body.innerHTML = '';

    const students = await request(`http://localhost:3030/jsonstore/collections/students`);
    const list = Object.values(students).map(createRow).join('');
    body.innerHTML = list;

}

function createRow(student) {
    const result = `
<tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>
</tr>`;
    return result;
}

async function postStudent(event) {
    event.preventDefault();
    const formData = new FormData(event.target);


    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');


    if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
        return alert(`All fields are mandatory`)
    }

    let letters = /^[A-Za-z]+$/;
    if(!firstName.match(letters)){
        return alert(`First name cannot have numbers in them!`);
    }
    if(!lastName.match(letters)){
        return alert(`Last name cannot have numbers in them!`);
    }

    if (isNaN(facultyNumber))  {
        return alert(`Faculty Number must be a number!`);
    }
    if (isNaN(grade))  {
        return alert(`Grade must be a number!`);
    }

    await request(` http://localhost:3030/jsonstore/collections/students`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    })
    event.target.reset();
    extractStudents()
}
function extract() {
    document.getElementById('form').addEventListener('submit', postStudent)
    extractStudents()
};
extract();
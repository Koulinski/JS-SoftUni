//month obj 
const monthsName = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12,
}

//starting point
const yearSelect = document.getElementById('years');

//select years
const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

//select months
const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c;
    return acc;
}, {});

//select the body
let bodySelect = yearSelect.parentElement;


//function to clear HTML & BackButton
function displaySection(section) {
    while (bodySelect.firstChild) {
        bodySelect.removeChild(bodySelect.lastChild);
    };
    bodySelect.appendChild(section);
}

displaySection(yearSelect);

//add event listener on years to select year
yearSelect.addEventListener('click', (ev) => {
    let target = ev.target;
    if (ev.target.classList.contains('date') || ev.target.classList.contains('day')) {
        ev.stopImmediatePropagation();
        const yearId = `year-${ev.target.textContent.trim()}`;
        displaySection(years[yearId]);
    }
})

//add event listener
bodySelect.addEventListener('click', (ev) => {
    if (ev.target.tagName == 'CAPTION') {
        const sectionId = ev.target.parentNode.parentNode.id;
        if (sectionId.includes('year-')) {
            displaySection(yearSelect);
        } else if (sectionId.includes('month-')) {
            const yearId = `year-${sectionId.split('-')[1]}`;
            displaySection(years[yearId]);
        }
    } else if (ev.target.tagName == 'TD' || ev.target.tagName == 'DIV') {
        const monthName = ev.target.textContent.trim();
        if (monthsName.hasOwnProperty(monthName)) {
            let parent = ev.target.parentNode;
            while (parent.tagName != 'TABLE') {
                parent = parent.parentNode;
            }
            const year = parent.querySelector('caption').textContent.trim();
            const monthId = `month-${year}-${monthsName[monthName]}`;
            displaySection(months[monthId]);
        }
    }
});
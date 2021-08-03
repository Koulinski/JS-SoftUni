function attachEvents() {
    const button = document.getElementById('submit');
    button.addEventListener('click', getForecast);
}

attachEvents();

async function getForecast() {
    let fDiv = document.getElementById('forecast').style.display = '';
    document.querySelectorAll('.label')[0].textContent = 'Current conditions'
    document.querySelectorAll('.label')[1].textContent = 'Three-day forecast'

    const input = document.getElementById('location');
    const city = input.value;
    const currentDiv = document.getElementById('current');
    const secondDiv = document.getElementById('upcoming');
    if (currentDiv.childNodes.length > 1) {
        currentDiv.removeChild(currentDiv.lastChild);
        secondDiv.removeChild(secondDiv.lastChild);
    }
    try {

        const code = await getCity(city);

        const [second, third] = await Promise.all([getDay(code), getCouple(code)]);

        const firstAppend = e('div', { className: 'forecasts' },
            e('span', { className: 'condition symbol' }, getEmoji(second.forecast.condition)),
            e('span', { className: 'condition' },
                e('span', { className: 'forcast-data' }, second.name),
                e('span', { className: 'forecast-data' }, `${second.forecast.low} / ${second.forecast.high}`),
                e('span', { className: 'forecast-data' }, second.forecast.condition)));
        currentDiv.appendChild(firstAppend);

        const thirdArr = Object.values(third.forecast);
        const secondApeend = e('div', { className: 'forecast-info' },
            e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, getEmoji(thirdArr[0].condition)),
                e('span', { className: 'forecast-data' }, `${thirdArr[0].low}/${thirdArr[0].high}`),
                e('span', { className: 'forcast-data' }, thirdArr[0].condition)),
            e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, getEmoji(thirdArr[1].condition)),
                e('span', { className: 'forecast-data' }, `${thirdArr[1].low}/${thirdArr[0].high}`),
                e('span', { className: 'forcast-data' }, thirdArr[1].condition)),
            e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, getEmoji(thirdArr[2].condition)),
                e('span', { className: 'forecast-data' }, `${thirdArr[2].low}/${thirdArr[0].high}`),
                e('span', { className: 'forcast-data' }, thirdArr[2].condition)));

        secondDiv.appendChild(secondApeend);

    } catch (error) {
        document.querySelectorAll('.label')[0].textContent = 'Error'
        document.querySelectorAll('.label')[1].textContent = 'Error'
    }
    input.value = '';
}

async function getCity(cityName) {
    const respose = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);

    const data = await respose.json();
    return data.find(el => el.name.toLowerCase() == cityName.toLowerCase()).code;


}

async function getDay(location) {
    const secondResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location}`);

    const secondData = await secondResponse.json();

    return secondData;
}

async function getCouple(location) {
    const thirdResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location}`);

    const thirdData = await thirdResponse.json();

    return thirdData;
}

function getEmoji(selectOne) {
    emoji = ''
    if (selectOne == 'Sunny') {
        emoji = '\u2600'
    }
    if (selectOne == 'Partly sunny') {
        emoji = '\u26C5'
    }
    if (selectOne == 'Overcast') {
        emoji = '\u2601'
    }
    if (selectOne == 'Rain') {
        emoji = '\u2614'
    }
    return emoji;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
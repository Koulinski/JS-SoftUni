function loadRepos() {
	let input = document.getElementById('username');
	input = input.value;
	//	console.log(input);

	const url = `https://api.github.com/users/${input}/repos`

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const ulElement = document.getElementById('repos');
			ulElement.innerHTML = '';
			data.forEach(el => {
				const liElement = document.createElement('li');
				liElement.textContent = el.full_name;
				ulElement.appendChild(liElement);
			});
		});

}

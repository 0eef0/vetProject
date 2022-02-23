const main = document.querySelector('#adminApp main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";


async function getApplInfo() {
	try {
		const { data: { pets } } = await axios.get('/api/v1/pets');
		const { data: { applications } } = await axios.get('/api/v1/applications');
		const appIndexes = {};
		applications.map(app => { appIndexes[app.petName] = appIndexes[app.petName].concat(app) || [] });
		console.log(appIndexes)
		main.innerHTML = `
		${pets.map((pet) => {
			return `
			<div class="record">
					<p>${pet.Name}</p>
					<p>Application count</p>
					<p class='moreInfo' onClick="${recordDrop}">See Applications</p>
				</div>
				<div class='appl'>
					${applications.map(app => {
				if (app.petName === pet.name) return `
					<div class="record">
						<p>Oldest to Newest</p>
						<p>Adopter Email</p>
						<p>${app.guardianName}</p>
						<p>${pet.Name}</p>
						<a class='moreInfo' href="/adminApplication?_id=${app._id}"><p>More Info...</p></a>
					</div>
				`
			}).reduce((a, c) => a + c)}
				</div>
			`
		}).reduce((a, c) => a + c)}
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
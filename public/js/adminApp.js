const main = document.querySelector('#adminApp main');

async function getApplInfo() {
	try {
		const { data: { applications } } = await axios.get('/api/v1/applications');
		console.log(applications)
		const appIndexes = {};
		applications.forEach(app => { appIndexes[app.wantedPet] = (appIndexes[app.wantedPet]) ? appIndexes[app.wantedPet].concat(app) : [app] });
		const returnString = [];
		for (const pet in appIndexes) {
			returnString.push(`
				<div class="record">
					<p>${pet}</p>
					<p>${appIndexes[pet].length} Application(s)</p>
					<p class='moreInfo' onClick="
						this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'
					">See Applications</p>
				</div>
				<div class='appl'>
			${appIndexes[pet].map(app => {
				return `
						<div class="record">
							<p>${app.fullName}</p>
							<p>${app.email}</p>
							<p>${app.dateCreated}</p>
							<a class='moreInfo' href="/adminApplication?_id=${app._id}">More Info...</a>
						</div>
					`
			}).reduce((a, c) => a + c)}
				</div>
			`);
		}
		main.innerHTML = returnString.reduce((a, c) => a + c);
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
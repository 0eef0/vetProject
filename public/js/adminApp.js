const main = document.querySelector('#adminApp main');

async function getApplInfo() {
	try {
		const { data: { applications } } = await axios.get('/api/v1/applications');
		if (applications.length <= 0) {
			main.innerHTML = '<h1 class="error-title">No applications available</h1>'
			return
		} else {
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
					const { fullName, email, dateCreated, _id: id } = app;
					const options = { year: 'numeric', month: 'long', day: 'numeric' };
					const creationDate = new Date(dateCreated).toLocaleDateString('PST', options)
					return `
							<div class="record">
								<p>${fullName}</p>
								<p>${email}</p>
								<p>${creationDate}</p>
								<a class='moreInfo' href="/adminApplication?_id=${id}">More Info...</a>
							</div>
						`
				}).join('')}
					</div>
				`);
			}
			main.innerHTML = returnString.join('');
		}
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
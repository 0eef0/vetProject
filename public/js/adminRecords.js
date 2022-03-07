const main = document.querySelector('#adminRecords main');

async function getInfoAboutUs(applications) {
	try {
		if (!applications) applications = (await axios.get('/api/v1/applications')).data.applications;
		if (!applications.length) {
			main.innerHTML = '';
			return;
		}
		main.innerHTML = `
		${applications.map(app => {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			const creationDate = new Date(app.dateCreated).toLocaleDateString('PST', options);

			if (app.status === 'Active') return `
				<div class="record">
					<p>${creationDate}</p>
					<p>${app.guardianEmail}</p>
					<p>${app.guardianName}</p>
					<p>${(app.accepted || app.rejected) ? 'Inactive' : 'Active'}</p>
					<p>${(app.accepted) ? 'Accepted' : (app.rejected) ? 'Rejected' : ''}</p>
					<a class="moreInfo" href="/adminApplication?_id=${app._id}">More Info...</a>
				</div >
			`
		}).reduce((a, c) => a + c)}
            `;
	}
	catch (error) {
		console.error(error)
	}
}
getInfoAboutUs()

const dataWords = {};

const search = document.querySelector('#adminRecords input');
search.addEventListener('input', async () => {
	const { data: { applications } } = await axios.get('/api/v1/applications');
	if (!dataWords.length) {
		applications.forEach(app => {
			dataWords[app._id] = Object.values(app);
		});
	}
	if (search.value === '') {
		getInfoAboutUs();
		return;
	}
	const returnApps = new Set();
	for (const id in dataWords) {
		for (var i = 0; i < dataWords[id].length; i++) {
			if (typeof dataWords[id][i] === 'string' && (new RegExp(search.value.toLowerCase())).test(dataWords[id][i].toLowerCase())) returnApps.add(applications.find(app => app._id === id));
		}
	}
	getInfoAboutUs([...returnApps]);
})
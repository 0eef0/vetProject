const main = document.querySelector('#adminRecords main');

async function getInfoAboutUs() {
	try {
		const { data: { applications } } = await axios.get('/api/v1/applications');
		console.log(applications)
		main.innerHTML = `
            	<input type="search" class="search" placeholder="Search..." />
				<div class="record template">
					<p onclick="${await axios.get('/api/v1/applications')}">Oldest to Newest</p>
					<p>Adopter Email</p>
					<p>Adopter Name</p>
					<p>Pet Name</p>
				</div>
		${applications.map(app => {
			if (app.status === 'Active') return `
				<div class="record">
					<p>Oldest to Newest</p>
					<p>${app.guardianEmail}</p>
					<p>${app.guardianName}</p>
					<p>Pet Name</p>
					<p class="moreInfo">More Info...</p>
				</div>
				`
		}).reduce((a, c) => a + c)}
            `;
	}
	catch (error) {
		console.log(error)
	}
}
getInfoAboutUs()
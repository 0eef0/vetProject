const main = document.querySelector('#adminApp main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";

async function getApplInfo() {
	try {
		const { data: { pets } } = await axios.get('/api/v1/pets');
		console.log(pets)
		main.innerHTML = `
			<div class="record template">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class='moreInfo'>More Info...</p>
			</div>
			
		${pets.map((pet) => {
			return (
				`<div class="record">
					<p>${pet.Name}</p>
					<p>Application count</p>
					<p class='moreInfo' onClick="${recordDrop}">See Applications</p>
				</div>
				<div class='appl'>
					<div class="record">
						<p>Oldest to Newest</p>
						<p>Adopter Email</p>
						<p>Adopter Name</p>
						<p>Pet Name</p>
						<p class='moreInfo'>More Info...</p>
					</div>
				</div>
				`
			)
		}).reduce((a, c) => a + c)}
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
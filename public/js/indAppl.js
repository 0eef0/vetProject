const main = document.querySelector('#indAppl main');

async function getApplInfo() {
	try {
		// const { data: aboutUs, } = await axios.get(``);
		main.innerHTML = `
			<div class="record">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p>See Applications</p>
				<label for="toggle">Toggle</label>
				<input type='checkbox' id='toggle' />
				<div class="record appl">
					<p>Oldest to Newest</p>
					<p>Adopter Email</p>
					<p>Adopter Name</p>
					<p>Pet Name</p>
					<p class="moreInfo">More Info...</p>
				</div>
			</div>
			<div class="record">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class="moreInfo">More Info...</p>
			</div>
			<div class="record">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class="moreInfo">More Info...</p>
			</div>
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
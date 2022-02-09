const main = document.querySelector('#indAppl main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";

async function getApplInfo() {
	try {
		// const { data: aboutUs, } = await axios.get(``);
		main.innerHTML = `
			<div class="record">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
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
				<div class="record">
					<p>Oldest to Newest</p>
					<p>Adopter Email</p>
					<p>Adopter Name</p>
					<p>Pet Name</p>
					<p class='moreInfo'>More Info...</p>
				</div>
			</div>
			<div class="record">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class='moreInfo' onClick="this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'flex') ? 'none' : 'flex'">See Applications</p>
			</div>
			<div class="record appl">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class='moreInfo'>More Info...</p>
			</div>
			<div class="record">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class='moreInfo' onClick="this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'flex') ? 'none' : 'flex'">See Applications</p>
			</div>
			<div class="record appl">
				<p>Oldest to Newest</p>
				<p>Adopter Email</p>
				<p>Adopter Name</p>
				<p>Pet Name</p>
				<p class='moreInfo'>More Info...</p>
			</div>
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
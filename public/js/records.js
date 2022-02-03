const main = document.querySelector('#records main');

async function getInfoAboutUs() {
	try {
		// const { data: aboutUs, } = await axios.get(``);
		main.innerHTML = `
            <input type="search" class="search" placeholder="Search..." />
				<div class="record template">
					<p>Oldest to Newest</p>
					<p>Adopter Email</p>
					<p>Adopter Name</p>
					<p>Pet Name</p>
					<p class="moreInfo">More Info</p>
				</div>
            `;
	}
	catch (error) {
		console.log(error)
	}
}
getInfoAboutUs()
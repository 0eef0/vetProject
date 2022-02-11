const main = document.querySelector('#adminIndApp main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";

async function getApplInfo() {
	try {
		// const { data: aboutUs, } = await axios.get(``);
		main.innerHTML = `
			<div class='info'>
				<h1>Adopter Information</h1>
				<p>${'s'}</p>
			</div>
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
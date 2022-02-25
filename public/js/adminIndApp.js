const main = document.querySelector('#adminIndApp main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";

async function getApplInfo() {
	try {
		const { data: { pets } } = await axios.get('/api/v1/pets');
		const { data: { applications } } = await axios.get('/api/v1/applications');
		const curApp = applications.find(app => app._id === (new URLSearchParams(window.location.search)).get('_id'));
		const curPet = pets.find(pet => pet._id === curApp.petId);
		console.log(curPet, curApp, pets)
		main.innerHTML = `
			<div class='appBlock'>
				<h1>Adopter Information</h1>
				<div class='row'>
					<h2>Date of submission:</h2>
					<p>${curApp.dateCreated}</p>
				</div>
				<div class='row'>
					<h2>Full Name:</h2>
					<p>${curApp.fullName}</p>
				</div>
				<div class='row'>
					<h2>Birthday:</h2>
					<p>${curApp.birthday}</p>
				</div>
				<div class='row'>
					<h2>Occupation:</h2>
					<p>${curApp.occupation}</p>
				</div>
				<div class='row'>
					<h2>Address:</h2>
					<p>${curApp.address}</p>
				</div>
				<div class='row'>
					<h2>Phone Number:</h2>
					<p>${curApp.phoneNumber}</p>
				</div>
				<div class='row'>
					<h2>Email:</h2>
					<p>${curApp.email}</p>
				</div>
				<div class='row'>
					<h2>How they heard about our adoptable animals:</h2>
					<p>${curApp.userReference}</p>
				</div>
				<div class='row'>
					<h2>Number of children in house:</h2>
					<p>${curApp.children}</p>
				</div>
				<div class='row'>
					<h2>Type of home:</h2>
					<p>${curApp.housing}</p>
				</div>
				<div class='row'>
					<h2>Adequate space for large animal:</h2>
					<p>${curApp.space}</p>
				</div>
				<div class='row'>
					<h2>Guardian's awareness for adopting:</h2>
					<p>${curApp.minor}</p>
				</div>
				<div class='row'>
					<h2>Guardian name:</h2>
					<p>${curApp.guardianName}</p>
				</div>
				<div class='row'>
					<h2>Guardian phone:</h2>
					<p>${curApp.guardianPhone}</p>
				</div>
				<div class='row'>
					<h2>Pet count:</h2>
					<p>${curApp.currentPets}</p>
				</div>
				<div class='row'>
					<h2>Pet vaccination:</h2>
					<p>${curApp.petVaccination}</p>
				</div>
				<div class='row'>
					<h2>Reason for pet no vaccinations:</h2>
					<p>${curApp.petVaccinationReason}</p>
				</div>
				<div class='row'>
					<h2>Do pets receive annual examination:</h2>
					<p>${curApp.petExamine}</p>
				</div>
				<div class='row'>
					<h2>Reason for no pet examinations:</h2>
					<p>${curApp.petExamineReason}</p>
				</div>
				<div class='row'>
					<h2>Why they are the best candidate:</h2>
					<p>${curApp.qualification}</p>
				</div>
				<div class='row'>
					<h2>Where the animal will spend most time:</h2>
					<p>${curApp.petTime}</p>
				</div>
				<div class='row'>
					<h2>Financially able to provide medical for the animal:</h2>
					<p>${curApp.affordableMedication}</p>
				</div>
				<div class='row'>
					<h2>Declawing:</h2>
					<p>${curApp.declaw}</p >
				</div >
				<div class='row'>
					<h2>Acknowledgement for accuracy of this information:</h2>
					<p>${curApp.acknowledgement}</p>
				</div>
				<div class='row'>
					<h2>Acknowledgement that adoption of this animal is not guaranteed:</h2>
					<p>${curApp.acknowledgementAdoption}</p>
				</div>
				<div class='row'>
					<h2>Name of desired pet:</h2>
					<p>${curApp.wantedPet}</p>
				</div>
			</div>
			</div >
			<div class='appBlock'>
				<h1>Pet Info</h1>
				<img alt="${curPet.Name}" />
				<div class='row'>
					<h2>Name of desired pet:</h2>
					<p>${curApp.wantedPet}</p>
				</div>
				<div class="choice">
					<button>Accept</button>
					<button>Decline</button>
				</div>
			</div>
		`;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
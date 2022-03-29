const main = document.querySelector('#adminIndApp main');

const url = "/api/v1/applications";

const petAppInfo = document.querySelector('.petAppInfo');
const appDateCreated = document.querySelector('#appDateCreated');
const appName = document.querySelector('#appName');
const appPetWanted = document.querySelector('#appPetWanted');
const appBirthday = document.querySelector('#appBirthday');
const appOccupation = document.querySelector('#appOccupation');
const appAddress = document.querySelector('#appAddress');
const appPhone = document.querySelector('#appPhone');
const appEmail = document.querySelector('#appEmail');
const appReference = document.querySelector('#appReference');
const appChildren = document.querySelector('#appChildren');
const appHousing = document.querySelector('#appHousing');
const appSpace = document.querySelector('#appSpace');
const appMinor = document.querySelector('#appMinor');
const appGuardian = document.querySelector('#appGuardian');
const appGuardianPhone = document.querySelector('#appGuardianPhone');
const appCurrPets = document.querySelector('#appCurrPets');
const appVaccination = document.querySelector('#appVaccination');
const appVaccinationReason = document.querySelector('#appVaccinationReason');
const appPetExamine = document.querySelector('#appPetExamine');
const appPetExamineReason = document.querySelector('#appPetExamineReason');
const appQualification = document.querySelector('#appQualification');
const appPetTime = document.querySelector('#appPetTime');
const appAffordableMedicine = document.querySelector('#appAffordableMedicine');
const appDeclaw = document.querySelector('#appDeclaw');
const appAcknowledgement = document.querySelector('#appAcknowledgement');
const appAcknowledgementAdoption = document.querySelector('#appAcknowledgementAdoption');

const petName = document.querySelector('#petName');
const petImage = document.querySelector('#petImage');
const petBirthday = document.querySelector('#petBirthday');
const petGender = document.querySelector('#petGender');
const petMedical = document.querySelector('#petMedical');
const petColor = document.querySelector('#petColor');
const petBreed = document.querySelector('#petBreed');
const petSpecies = document.querySelector('#petSpecies');
const petPersonality = document.querySelector('#petPersonality');
const petNotes = document.querySelector('#petNotes');

const acceptBtn = document.querySelector('#accept');
const declineBtn = document.querySelector('#decline');

async function getApplInfo() {
	try {
		const { data: { pets } } = await axios.get('/api/v1/pets');
		const { data: { applications } } = await axios.get('/api/v1/applications');
		const curApp = applications.find(app => app._id === (new URLSearchParams(window.location.search)).get('_id'));
		const curPet = pets.find(pet => pet._id === curApp.wantedPetId);

		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const dateCreated = new Date(curApp.dateCreated).toLocaleDateString('PST', options)

		const tempDate = new Date(curApp.birthday);
		const addDay = (tempDate.setDate(tempDate.getDate() + 1));
		const appBday = new Date(new Date(addDay)).toLocaleDateString('PST', options)
		const petBDay = new Date(curPet.Birthday).toLocaleDateString('PST', options)

		console.log(appDateCreated)
		appDateCreated.innerHTML = dateCreated;
		appName.innerHTML = curApp.fullName;
		appPetWanted.innerHTML = curApp.wantedPet;
		appBirthday.innerHTML = appBday;
		appOccupation.innerHTML = curApp.occupation;
		appAddress.innerHTML = curApp.address;
		appPhone.innerHTML = curApp.phoneNumber;
		appEmail.innerHTML = curApp.email;
		appReference.innerHTML = curApp.userReference;
		appChildren.innerHTML = curApp.children;
		appHousing.innerHTML = curApp.housing;
		appSpace.innerHTML = curApp.space;
		appMinor.innerHTML = curApp.minor;
		appGuardian.innerHTML = curApp.guardianName;
		appGuardianPhone.innerHTML = curApp.guardianPhone;
		appCurrPets.innerHTML = curApp.currentPets;

		appVaccination.innerHTML = curApp.petVaccination;
		appVaccinationReason.innerHTML = curApp.petVaccinationReason;
		appPetExamine.innerHTML = curApp.petExamine;
		appPetExamineReason.innerHTML = curApp.petExamineReason;
		appQualification.innerHTML = curApp.qualification;
		appPetTime.innerHTML = curApp.petTime;
		appAffordableMedicine.innerHTML = curApp.affordableMedication;
		appDeclaw.innerHTML = curApp.declaw;
		appAcknowledgement.innerHTML = curApp.acknowledgement;
		appAcknowledgementAdoption.innerHTML = curApp.acknowledgementAdoption;

		petName.innerHTML = curPet.Name;
		petImage.src = `/api/v1/petImages/${curPet.IMG[0]}`;
		petImage.alt = curPet.Name;
		petBirthday.innerHTML = petBDay;
		petGender.innerHTML = curPet.Gender;
		petMedical.innerHTML = curPet.Medical.map(e => { return `<li>${e}</li>` }).reduce((a, c) => a + c)
		petColor.innerHTML = curPet.Color;
		petBreed.innerHTML = curPet.Breed;
		petSpecies.innerHTML = curPet.Species;
		petPersonality.innerHTML = curPet.Personality.map(e => { return `<li>${e}</li>` }).reduce((a, c) => a + c)
		petNotes.innerHTML = curPet.Notes;

		petAppInfo.innerHTML += `
			<div class="choice">
				<button id="accept" onClick="confirmAcceptApp('${curApp._id}')">Accept</button>
				<button id="decline" onClick="confirmDeclineApp('${curApp._id}')">Decline</button>
			</div>	
		`
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()

const confirmAcceptApp = async (id) => {
	const acceptAppPopup = new Modal({
		title: 'Confirm Application Acceptance',
		content: 'Are you sure you want to accept this application?',
		buttons: [
			{
				title: 'Yes',
				type: 'primary',
				action() {
					acceptApplication(id)
					acceptAppPopup.close()
				}
			}, {
				title: 'Cancel',
				type: 'red',
				action() {
					acceptAppPopup.close()
				}
			}
		]
	})

	acceptAppPopup.show()
};
const acceptApplication = async (id) => {
	let updatedApplication = {
		accepted: true,
		rejected: false
	}
	console.log(id)
	await axios.patch(`${url}/${id}`, updatedApplication);
}

const confirmDeclineApp = async (id) => {
	const declineAppPopup = new Modal({
		title: 'Confirm Application Decline',
		content: 'Are you sure you want to decline this application?',
		buttons: [
			{
				title: 'Yes',
				type: 'primary',
				action() {
					declineApplication(id)
					declineAppPopup.close()
				}
			}, {
				title: 'Cancel',
				type: 'red',
				action() {
					declineAppPopup.close()
				}
			}
		]
	})

	declineAppPopup.show()
};
const declineApplication = async (id) => {
	const updatedApplication = {
		accepted: false,
		rejected: true
	}
	try {
		await axios.patch(`${url}/${id}`, updatedApplication);
		console.log('success')
	} catch (error) {
		console.error(error)
	}
}

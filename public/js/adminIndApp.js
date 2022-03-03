const main = document.querySelector('#adminIndApp main');

const recordDrop = "this.parentElement.nextElementSibling.style.display = (this.parentElement.nextElementSibling.style.display === 'block') ? 'none' : 'block'";

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
		const curPet = pets.find(pet => pet.id === curApp.wantedPetId);

		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const dateCreated = new Date(curApp.dateCreated).toLocaleDateString('PST', options)
		const appBirthday = new Date(curApp.birthday).toLocaleDateString('PST', options)
		const petBDay = new Date(curPet.birthday).toLocaleDateString('PST', options)
		
		console.log(appDateCreated)
		appDateCreated.innerHTML = dateCreated;
		appName.innerHTML = curApp.fullName;
		appPetWanted.innerHTML = curApp.wantedPet;
		appBirthday.innerHTML = appBirthday;
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
		appVaccinationReason.innerHTML = curApp.perVaccinationReason;
		appPetExamine.innerHTML = curApp.petExamine;
		appPetExamineReason.innerHTML = curApp.appPetExamineReason;
		appQualification.innerHTML = curApp.qualification;
		appPetTime.innerHTML = curApp.petTime;
		appAffordableMedicine.innerHTML = curApp.affordableMedication;
		appDeclaw.innerHTML = curApp.declaw;
		appAcknowledgement.innerHTML = curApp.appAcknowledgement;
		appAcknowledgementAdoption.innerHTML = curApp.acknowledgementAdoption;

		petName.innerHTML = curPet.Name;
		petImage.src = curPet.IMG[0];
		petImage.alt = curPet.Name;
		petBirthday.innerHTML = petBDay;
		petGender.innerHTML = curPet.Gender;
		petMedical.innerHTML = curPet.Medical.map(e => { return `<li>${e}</li>` }).reduce((a, c) => a + c)
		petColor.innerHTML = curPet.Color;
		petBreed.innerHTML = curPet.Breed;
		petSpecies.innerHTML = curPet.Species;
		petPersonality.innerHTML = curPet.Personality.map(e => { return `<li>${e}</li>` }).reduce((a, c) => a + c)
		petNotes.innerHTML = curPet.Notes;
	}
	catch (error) {
		console.log(error)
	}
}
getApplInfo()
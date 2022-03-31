const adoptFormDOM = document.querySelector('.adoptForm');
const otherHomeInput = document.getElementById('otherHomeRadio');

const params = window.location.search
const id = new URLSearchParams(params).get('id')
const url = "/api/v1/pets";

let petName;
let petSpecies;
let petId;

const getPet = async () => {
    const { data: {pet},} = await axios.get(`${url}/${id}`)
    const {Name, Species, _id} = pet;
    petName = Name;
    petSpecies = Species;
    petId = _id;
    document.getElementById('adoptConfirmationBox').innerHTML = `<div><h1>You have applied to adopt ${Name}. Click anywhere to return to pets page.</h1></div>`;
    document.getElementById('adoptExplain').innerHTML = `Please explain why you are the best candidate to adopt ${Name}`;
};
getPet();

otherHomeInput.addEventListener('click', () => {
    if(otherHomeInput.checked) {
        document.getElementById('Other').disabled = false;
    } else {
        document.getElementById('Other').disabled = true;
    }
});

adoptFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const petApplication = {
        fullName: document.getElementById('userFullName').value,
        birthday: document.getElementById('userBirthday').value,
        occupation: document.getElementById('userOccupation').value,
        address: document.getElementById('userAddress').value,
        phoneNumber: document.getElementById('userPhoneNumber').value,
        email: document.getElementById('userEmail').value,
        birthday: document.getElementById('userBirthday').value,
        userReference: document.getElementById('userReference').value,
        children: document.getElementById('numChildren').value,
        housing: (document.getElementById('House').checked) ? 'House' : (document.getElementById('Apartment').checked) ? 'Apartment' : (document.getElementById('Condominium').checked) ? 'Condominium' : document.getElementById('Other'),
        userReference: document.getElementById('userReference').value,
        children: document.getElementById('numChildren').value,
        housing: (document.getElementById('House').checked) ? 'House' : (document.getElementById('Apartment').checked) ? 'Apartment' : (document.getElementById('Condominium').checked) ? 'Condominium' : document.getElementById('Other'),
        space: (document.getElementById('lgDogYes').checked) ? true : (document.getElementById('lgDogNo')) ? false : undefined,
        minor: (document.getElementById('ifUnder18Yes')) ? true : (document.getElementById('ifUnder18No')) ? false : undefined,
        guardianName: document.getElementById('guardianName').value,
        guardianPhone: document.getElementById('guardianNumber').value,
        guardianEmail: document.getElementById('guardianEmail').value,
        currentPets: document.getElementById('homePets').value,
        petVaccination: (document.getElementById('otherPetSterNVaxYes').checked) ? true : (document.getElementById('otherPetSterNVaxNo').checked) ? false : (document.getElementById('otherPetSterNVaxNA').checked) ? 'N/A' : undefined,
        petVaccinationReason: document.getElementById('sterNVaxExplain').value,
        petExamine: (document.getElementById('annualExamYes').checked) ? true : (document.getElementById('annualExamNo').checked) ? false : (document.getElementById('annualExamNA').checked) ? 'N/A' : undefined,
        petExamineReason: document.getElementById('annualExamExplain').value,
        qualification: document.getElementById('bestCandidateExplain').value,
        petTime: document.getElementById('petTimeSpent').value,
        affordableMedication: (document.getElementById('financialYes').checked) ? 'Yes' : (document.getElementById('financialNo').checked) ? 'No' : (document.getElementById('financialMaybe').checked) ? 'Maybe' : 'Undefined',
        declaw: (document.getElementById('declawYes')) ? 'Yes' : (document.getElementById('declawNo')) ? 'No' : (document.getElementById('declawNA').checked) ? 'N/A' : undefined,
        acknowledgement: document.getElementById('acknowledgement').checked,
        acknowledgementAdoption: document.getElementById('acknowledgement2').checked,
        wantedPet: petName,
        wantedPetId: petId,
        dateCreated: new Date,
    }
    try {
        await axios.post('/api/v1/applications', petApplication);
        document.getElementById('adoptConfirmationBox').style.display = 'flex';
    } catch(error) {
        console.log(error.response.data);
    }
})

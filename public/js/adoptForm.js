const adoptFormDOM = document.querySelector('.newPetForm');
const otherHomeInput = document.getElementById('otherHomeRadio');

otherHomeInput.addEventListener('click', () => {
    if(otherHomeInput.checked) {
        document.getElementById('Other').disabled = false;
    } else {
        document.getElementById('Other').disabled = true;
    }
});

adoptFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    let fullName = document.getElementById('userFullName').value;
    let occupation = document.getElementById('userOccupation').value;
    let address = document.getElementById('userAddress').value;
    let phoneNumber = document.getElementById('userPhoneNumber').value;
    let email = document.getElementById('userEmail').value;
    let userReference = document.getElementById('userReference').value;
    let children = document.getElementById('numChildren').value;
    let housing = (document.getElementById('House').checked) ? 'House' : (document.getElementById('Apartment').checked) ? 'Apartment' : (document.getElementById('Condominium').checked) ? 'Condominium' : document.getElementById('Other');
    let space = (document.getElementById('lgDogYes').checked) ? true : (document.getElementById('lgDogNo')) ? false : undefined;
    let minor = (document.getElementById('ifUnder18Yes')) ? true : (document.getElementById('ifUnder18No')) ? false : undefined;
    let guardianName = document.getElementById('guardianName').value;
    let guardianPhone = document.getElementById('guardianNumber').value;
    let guaranteedEmail = document.getElementById('guardianEmail').value;
    let currentPets = document.getElementById('homePets').value;
    let petVaccination = (document.getElementById('otherPetSterNVaxYes').checked) ? true : (document.getElementById('otherPetSterNVaxNo').checked) ? false : (document.getElementById('otherPetSterNVaxNA').checked) ? 'N/A' : undefined;
    let petVaccinationReason = document.getElementById('sterNVaxExplain').value;
    let petExamine = (document.getElementById('annualExamYes').checked) ? true : (document.getElementById('annualExamNo').checked) ? false : (document.getElementById('annualExamNA').checked) ? 'N/A' : undefined;
    let petExamineReason = document.getElementById('annualExamExplain').value;
    let qualification = document.getElementById('bestCandidateExplain').value;
    let petTime = document.getElementById('petTimeSpent').value;
    let affordableMedication = (document.getElementById('financialYes').checked) ? 'Yes' : (document.getElementById('financialNo').checked) ? 'No' : (document.getElementById('financialMaybe').checked) ? 'Maybe' : 'Undefined';
    let declaw = (document.getElementById('declawYes')) ? 'Yes' : (document.getElementById('declawNo')) ? 'No' : (document.getElementById('declawNA').checked) ? 'N/A' : undefined;
    let acknowledgement = document.getElementById('acknowledgement').checked;
    let acknowledgementAdoption = document.getElementById('acknowledgement2').checked;



    let application = {
        FullName: fullName,
        Occupation: occupation,
        Address: address,
        PhoneNumber: phoneNumber,
        Email: email,
        UserReference: userReference,
        Children: children,
        Housing: housing,
        Space: space,
        Minor: minor,
        GuardianName: guardianName,
        GuardianPhone: guardianPhone,
        GuardianEmail: guaranteedEmail,
        CurrentPets: currentPets,
        PetVaccination: petVaccination,
        PetVaccinationReason: petVaccinationReason,
        PetExamine: petExamine,
        PetExamineReason: petExamineReason,
        Qualification: qualification,
        PetTime: petTime,
        AffordableMedication: affordableMedication,
        Declaw: declaw,
        Acknowledgement: acknowledgement,
        AcknowledgementAdoption: acknowledgementAdoption,
        //WantedPet:wantedPet
    };

    try{
        // await axios.post('/api/v1/applications', {fullName,  occupation, address, phoneNumber, email, userReference, children, housing, space, minor, guardianName, guardianPhone, guardianEmail, currentPets, petVaccination, petVaccinationReason, petExamine, petExamineReason, qualification, petTime, affordableMedication, declaw, acknowledgement, acknowledgementAdoption, wantedPet});
        // console.log(phoneNumber)
        await console.log(application);
    const petApplication = {
        fullname: document.getElementById('userFullName').value,
        occupation: document.getElementById('userOccupation').value,
        address: document.getElementById('userAddress').value,
        phoneNumber: document.getElementById('userPhoneNumber').value,
        email: document.getElementById('userEmail').value,
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
        guaranteedEmail: document.getElementById('guardianEmail').value,
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
        // wantedPet: document.getElementById('').value
    }
    const appliJSON = JSON.stringify(petApplication);

    console.log( {
        FullName: petApplication.fullname,
        Occupation: petApplication.occupation,
        Address: petApplication.address,
        PhoneNumber: petApplication.phoneNumber,
        Email: petApplication.email,
        UserReference: petApplication.userReference,
        Children: petApplication.children,
        Housing: petApplication.housing,
        Space: petApplication.space,
        Minor: petApplication.minor,
        GuardianName: petApplication.guardianName,
        GuardianPhone: petApplication.guardianPhone,
        GuardianEmail: petApplication.guaranteedEmail,
        CurrentPets: petApplication.currentPets,
        PetVaccination: petApplication.petVaccination,
        PetVaccinationReason: petApplication.petVaccinationReason,
        PetExamine: petApplication.petExamine,
        PetExamineReason: petApplication.petExamineReason,
        Qualification: petApplication.qualification,
        PetTime: petApplication.petTime,
        AffordableMedication: petApplication.affordableMedication,
        Declaw: petApplication.declaw,
        Acknowledgement: petApplication.acknowledgement,
        AcknowledgementAdoption: petApplication.acknowledgementAdoption,
        // WantedPet:wantedPet
    });

    try{
        await axios.post('/api/v1/applications', {appliJSON});
        console.log(phoneNumber)
        document.getElementsByClassName('adoptForm')[0].reset();
        document.getElementById('adoptConfirmationBox').style.display = 'flex';
    }catch(error){
        console.log(error.response.data)
    }
}catch(err){
    console.log(err);
}})
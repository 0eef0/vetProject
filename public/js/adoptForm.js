const adoptFormDOM = document.querySelector('.adoptForm');
const otherHomeInput = document.getElementById('otherHomeRadio');

otherHomeInput.addEventListener('click', () => {
    if(otherHomeInput.checked) {
        document.getElementById('Other').disabled = false;
    } else {
        document.getElementById('Other').disabled = true;
    }
});

adoptFormDOM.addEventListener('submit', (e) => {
    e.preventDefault();

    let fullName = document.getElementById('userFullName').value;
    let occupation = document.getElementById('userOccupation').value;
    let address = document.getElementById('userAddress').value;
    let phoneNumber = document.getElementById('userPhoneNumber').value;
    let email = document.getElementById('userEmail').value;
    let userReference = document.getElementById('userReference').value;
    let numChildren = document.getElementById('numChildren').value;
    let homeType = (document.getElementById('House').checked) ? 'House' : (document.getElementById('Apartment').checked) ? 'Apartment' : (document.getElementById('Condominium').checked) ? 'Condominium' : document.getElementById('Other');
    let dogSpace = (document.getElementById('lgDogYes').checked) ? true : (document.getElementById('lgDogNo')) ? false : undefined;
    let minor = (document.getElementById('ifUnder18Yes')) ? true : (document.getElementById('ifUnder18No')) ? false : undefined;
    let guardianName = document.getElementById('guardianName').value;
    let guardianNumber = document.getElementById('guardianNumber').value;
    let guaranteedEmail = document.getElementById('guardianEmail').value;
    let currentPets = document.getElementById('homePets').value;
    let currPetSterNVax = (document.getElementById('otherPetSterNVaxYes').checked) ? true : (document.getElementById('otherPetSterNVaxNo').checked) ? false : (document.getElementById('otherPetSterNVaxNA').checked) ? 'N/A' : undefined;
    let sterNVaxExplain = document.getElementById('sterNVaxExplain').value;
    let annualExam = (document.getElementById('annualExamYes').checked) ? true : (document.getElementById('annualExamNo').checked) ? false : (document.getElementById('annualExamNA').checked) ? 'N/A' : undefined;
    let annualExamExplain = document.getElementById('annualExamExplain').value;
    let bestCandidateExplain = document.getElementById('bestCandidateExplain').value;
    let petTimeSpent = document.getElementById('petTimeSpent').value;
    let financial = (document.getElementById('financialYes').checked) ? 'Yes' : (document.getElementById('financialNo').checked) ? 'No' : (document.getElementById('financialMaybe').checked) ? 'Maybe' : 'Undefined';
    let declaw = (document.getElementById('declawYes')) ? 'Yes' : (document.getElementById('declawNo')) ? 'No' : (document.getElementById('declawNA').checked) ? 'N/A' : undefined;
    let acknowledgement = document.getElementById('acknowledgement').checked;
    let acknowledgement2 = document.getElementById('acknowledgement2').checked;


    console.log( {
        FullName: fullName,
        Occupation: occupation,
        Address: address,
        PhoneNumber: phoneNumber,
        Email: email,
        UserReference: userReference,
        Children: numChildren,
        Housing: homeType,
        Space: dogSpace,
        Minor: minor,
        GuardianName: guardianName,
        GuardianPhone: guardianNumber,
        GuardianEmail: guaranteedEmail,
        CurrentPets: currentPets,
        PetExamine: currPetSterNVax,
        PetExamineReason: sterNVaxExplain,
        Qualification: bestCandidateExplain,
        PetTime: petTimeSpent,
        AffordableMedication: financial,
        Declaw: declaw,
        Acknowledgement: acknowledgement,
        AcknowledgementAdoption: acknowledgement2,
    });
})
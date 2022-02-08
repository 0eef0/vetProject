const submitForm = (e) => {
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
    let guardianName = document.getElementById('guardianName');
    let guardianNumber = document.getElementById('guardianNumber');
    let guaranteedEmail = document.getElementById('guardianEmail');
    let currentPets = document.getElementById('homePets');
    //let currPetSterNVax = (document.getElementById('otherPetSterNVaxYes').checked) ? true : (document.getElementById('otherPetSterNVaxNo').checked) ? false : (document.getElementById(''))

    return {

    }
}
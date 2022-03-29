const petNameDOM = document.querySelector('.pet-name');
const carouselImgContainerDOM = document.querySelector('.carouselImages');

const birthdayDOM = document.querySelector('.birthday');
const genderDOM = document.querySelector('.gender');
const colorDOM = document.querySelector('.color');
const breedDOM = document.querySelector('.breed');
const speciesDOM = document.querySelector('.species');
const medicalListDOM = document.querySelector('.medical');
const personalityListDOM = document.querySelector('.personality');
const additionalNotesDOM = document.querySelector('.notes');
const adoptBtnDOM = document.querySelector('.adopt-button');
const petImageNamesDOM = document.querySelector('#petImageNames');

const params = window.location.search
const id = new URLSearchParams(params).get('id')
const url = "/api/v1/pets";

let petImages;
let petId;

const showPet = async () => {
    const { data: { pet }, } = await axios.get(`${url}/${id}`)
    const { Name, Birthday, Gender, Color, Breed, Species, Medical, Personality, Notes, IMG } = pet;
    console.log(pet)
    const bDay = new Date(Birthday);
    petImages = IMG;
    document.getElementById('confirmationMessage').innerHTML = `You have updated ${Name}. Click anywhere to return to pets page.`

    document.title = `Edit ${Name}`;
    petNameDOM.value = `${Name}`;
    birthdayDOM.value = bDay.toISOString().slice(0, 10);
    if (Gender === 'Female') document.getElementById('femaleSelector').selected = true;
    colorDOM.value = Color;
    breedDOM.value = Breed;
    additionalNotesDOM.value = Notes;
    adoptBtnDOM.href = `/adoptionform?id=${id}`;
    medicalListDOM.innerHTML = Medical;
    personalityListDOM.innerHTML = Personality;

    IMG.map((image, index) => {
        petImageNamesDOM.innerHTML += `<li onclick="removeImg(${index})">${image}</li>`
    })
}
showPet()

const confirmUpdate = async (content = 'Are you sure?', id, data) => {
    let petUpdate = new Modal({
        title: 'Warning!',
        content,
        forms: [
            {
                title: 'Yes',
                type: 'primary',
                action: `/api/v1/pets/${id}`,
                method: 'post',
                body: data
            }, {
                title: 'Cancel',
                type: 'red',
                action() {
                    petUpdate.close()
                }
            }
        ]
    })

    petUpdate.show()
};

const addImg = () => {
    // confirmUpdate('Are you sure you want to add the image(s)?', id, { newImage: true });
}

const removeImg = (index) => {
    confirmUpdate('Are you sure you want to delete this image?', id, { imageName: petImages[index] });
}

const updatePet = async () => {
    let updatedPet = {
        Name: petNameDOM.value,
        Birthday: birthdayDOM.value,
        Gender: (document.getElementById('femaleSelector').selected) ? 'Female' : 'Male',
        Color: colorDOM.value,
        Breed: breedDOM.value,
        Medical: medicalListDOM.value.split(','),
        Personality: personalityListDOM.value.split(','),
        Notes: additionalNotesDOM.value,
        IMG: petImages
    }
    confirmUpdate('Are you sure you want to update this pet?', id, { pet: updatedPet });
    // document.getElementById('newPetConfirmationBox').style.display = 'flex';
}
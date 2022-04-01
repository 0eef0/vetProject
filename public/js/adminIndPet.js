const petNameDOM = document.querySelector('.pet-name');
const carouselImgContainerDOM = document.querySelector('.carouselImages');

const birthdayDOM = document.querySelector('.birthday');
const genderDOM = document.querySelector('#petGender');
const colorDOM = document.querySelector('.color');
const breedDOM = document.querySelector('.breed');
const speciesDOM = document.querySelector('.species');
const medicalListDOM = document.querySelector('.medical');
const personalityListDOM = document.querySelector('.personality');
const additionalNotesDOM = document.querySelector('.notes');
const adoptBtnDOM = document.querySelector('.adopt-button');
const petImageNamesDOM = document.querySelector('#petImageNames');
const imgAdd = document.getElementById('imgAdd');

const params = window.location.search
const id = new URLSearchParams(params).get('id')
const url = "/api/v1/pets";

let petImages;

const showPet = async () => {
    const { data: { pet }, } = await axios.get(`${url}/${id}`)
    const { Name, Birthday, Gender, Color, Breed, Species, Medical, Personality, Notes, IMG } = pet;
    const bDay = new Date(Birthday);
    petImages = IMG;
    if (petImages.length == 12) {
        imgAdd.style.display = 'none';
    } else {
        imgAdd.action = `/api/v1/petImages/${id}`;
        imgAdd.addEventListener('submit', e => {
            e.preventDefault();
            confirmSubmit('Are you sure you want to add the image(s)?', e.target);
        });
    }
    document.getElementById('confirmationMessage').innerHTML = `You have updated ${Name}. Click anywhere to return to pets page.`
    document.title = `Edit ${Name}`;
    petNameDOM.value = `${Name}`;
    birthdayDOM.value = bDay.toISOString().slice(0, 10);
    genderDOM.value = Gender;
    colorDOM.value = Color;
    breedDOM.value = Breed;
    additionalNotesDOM.value = Notes;
    adoptBtnDOM.href = `/adoptionform?id=${id}`;
    medicalListDOM.innerHTML = Medical.join(';');
    personalityListDOM.innerHTML = Personality.join(';');

    IMG.map((image, index) => {
        petImageNamesDOM.innerHTML += `
            <div class='imgWrap'>
                <li onclick="removeImg(${index})">${image}</li>
                <img src="/api/v1/petImages/${image}" />
            <div/>
        `;
    })
}
showPet()

const confirmSubmit = (content = 'Are you sure?', e) => {
    let confirmBox = new Modal({
        title: 'Warning!',
        content,
        forms: [
            {
                title: 'Yes',
                type: 'primary',
                action() {
                    e.submit();
                }
            }
        ],
        buttons: [
            {
                title: 'Cancel',
                type: 'red',
                action() {
                    confirmBox.close();
                }
            }
        ]
    })

    confirmBox.show()
};

const confirmUpdate = (content = 'Are you sure?', id, data) => {
    let petUpdate = new Modal({
        title: 'Warning!',
        content,
        forms: [
            {
                title: 'Yes',
                type: 'primary',
                action: `${url}/${id}`,
                method: 'post',
                body: data
            }
        ],
        buttons: [
            {
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

const removeImg = (index) => {
    confirmUpdate('Are you sure you want to delete this image?', id, { imageName: petImages[index] });
}

const updatePet = () => {
    let updatedPet = {
        Name: petNameDOM.value,
        Birthday: birthdayDOM.value,
        Gender: document.getElementById('petGender').value,
        Color: colorDOM.value,
        Breed: breedDOM.value,
        Medical: medicalListDOM.value,
        Personality: personalityListDOM.value,
        Notes: additionalNotesDOM.value,
        IMG: petImages
    }
    confirmUpdate('Are you sure you want to update this pet?', id, { pet: updatedPet });
}
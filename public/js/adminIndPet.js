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

let petImages = [];

const showPet = async () => {
    const { data: {pet},} = await axios.get(`${url}/${id}`)
    const {Name, Birthday, Gender, Color, Breed, Species, Medical, Personality, Notes, IMG} = pet;
    const bDay = new Date(Birthday);
    petImages = IMG;

    document.title = `Adopt ${Name}`;
    petNameDOM.placeholder = `Name: ${Name}`;
    birthdayDOM.value = bDay.toISOString().slice(0, 10);
    //genderDOM.innerHTML = Gender;
    if(Gender === 'Female') document.getElementById('femaleSelector').selected = true;
    colorDOM.placeholder = Color;
    breedDOM.placeholder = Breed;
    // speciesDOM.innerHTML = Species;
    additionalNotesDOM.placeholder = Notes;
    adoptBtnDOM.href = `/adoptionform?id=${id}`;

    // const medicalInfo = Medical.map((info) => {
    //     return `<li>${info}</li>`
    // }).join('');
    medicalListDOM.innerHTML = Medical;

    // const personalInfo = Personality.map((traits) => {
    //     return `<li>${traits}</li>`
    // }).join('');
    personalityListDOM.innerHTML = Personality;

    IMG.map((image, index) => {
        petImageNamesDOM.innerHTML += `<li onclick="removeImg(${index})">${image}</li>`
    })

    console.log(pet)
    console.log(id)
}
showPet()

const addImg = () => {
    petImages.push(document.getElementById('petPhotoSub').value.split(`\\`)[2]);
    petImageNamesDOM.innerHTML = '<form><input type="file"><button>Submit Photo</button></form>';
    petImages.map((image, index) => {
        petImageNamesDOM.innerHTML += `<li onclick="removeImg(${index})">${image}</li>`;
    })
}

const removeImg = (index) => {
    petImages.splice(index, 1);
    petImageNamesDOM.innerHTML = '<form><input type="file"><button>Submit Photo</button></form>';
    petImages.map((image, index) => {
        petImageNamesDOM.innerHTML += `<li onclick="removeImg(${index})">${image}</li>`;
    })
}
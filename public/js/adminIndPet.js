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

const params = window.location.search
const id = new URLSearchParams(params).get('id')
const url = "/api/v1/pets";

const showPet = async () => {
    const { data: {pet},} = await axios.get(`${url}/${id}`)
    const {Name, Birthday, Gender, Color, Breed, Species, Medical, Personality, Notes, IMG} = pet;
    const bDay = new Date(Birthday)

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

    const carouselImages = IMG.map((image) => {
        return `
        <img src="${image}" class="carouselImg">`
    }).join('');
    console.log(carouselImages)
    carouselImgContainerDOM.innerHTML = carouselImages;

    const firstImage = carouselImgContainerDOM.firstElementChild;
    firstImage.classList.add('activeImg');
    console.log(pet)
    console.log(id)
}
showPet()
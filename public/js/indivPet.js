const petNameDOM = document.querySelector('.pet-name');
const carouselImgContainerDOM = document.querySelector('.carouselImages');
const carouselBtnContainerDOM = document.querySelector('.carouselBtnPanel');

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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const bDay = new Date(Birthday).toLocaleDateString('PST', options)

    document.title = `Adopt ${Name}`;
    petNameDOM.innerHTML = Name;
    birthdayDOM.innerHTML = bDay;
    genderDOM.innerHTML = Gender;
    colorDOM.innerHTML = Color;
    breedDOM.innerHTML = Breed;
    // speciesDOM.innerHTML = Species;
    additionalNotesDOM.innerHTML = Notes;
    adoptBtnDOM.href = `/adoptionform?id=${id}`;

    const medicalInfo = Medical.map((info) => {
        return `<li>${info}</li>`
    }).join('');
    medicalListDOM.innerHTML = medicalInfo;

    const personalInfo = Personality.map((traits) => {
        return `<li>${traits}</li>`
    }).join('');
    personalityListDOM.innerHTML = personalInfo;

    const carouselImages = IMG.map((image) => {
        return `
        <img src="${image}" class="carouselImg">`
    }).join('');
    console.log(carouselImages)
    carouselImgContainerDOM.innerHTML = carouselImages;

    IMG.map((image, index) => {
        carouselBtnContainerDOM.innerHTML += `<button class="carouselBtn" onclick="carouselChange(${index})" name="carouselBtn"></button>`
    })
    carouselBtnContainerDOM.firstElementChild.classList.add('activeBtn')

    const firstImage = carouselImgContainerDOM.firstElementChild;
    firstImage.classList.add('activeImg');
    console.log(pet)
    console.log(id)
}
showPet()
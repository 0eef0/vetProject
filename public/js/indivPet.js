const petNameDOM = document.querySelector('.pet-name');
const carouselImgContainerDOM = document.querySelector('.carouselImages');


const params = window.location.search
const id = new URLSearchParams(params).get('id')
const url = "/api/v1/pets";

const showPet = async () => {
    const { data: {pet},} = await axios.get(`${url}/${id}`)
    const {IMG} = pet;

    const carouselImages = IMG.map((image) => {
        return `
        <img src="${image}" class="carouselImg">`
    }).join();

    carouselImgContainerDOM.innerHTML = carouselImages;
    const firstImage = carouselImgContainerDOM.firstElementChild;
    firstImage.classList.add('activeImg');
    console.log(pet)
    console.log(id)
}
showPet()
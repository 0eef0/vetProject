const petCardContainerDOM = document.querySelector('.card-container');
const newPetFormDOM = document.querySelector('.newPetForm');
const url = "/api/v1/pets";

let imgAmount = 3;
const addImg = () => {
    if(imgAmount < 12) {
        document.getElementById('images').innerHTML += '<input type="url" class="petImg" placeholder="Imgur Link" required><br>';
        imgAmount++;
    } else {
        document.getElementById('addImgBtn').style.display = 'none';
    }
}

newPetFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    let petName = document.getElementById('petName').value;
    let petBirthday = document.getElementById('petBirthday').value;
    let petGender = document.getElementById('petGender').value;
    let petSpecies = document.getElementById('petSpecies').value;
    let petColor = document.getElementById('petColor').value;
    let petBreed = document.getElementById('petBreed').value;
    let petMedical = document.getElementById('petMedical').value.split(',');
    let petPersonality = document.getElementById('petPersonality').value.split(',');
    let petNotes = document.getElementById('petNotes').value;
    let petImagesInput = document.getElementsByClassName('petImg');
    let petImages = [];

    for(let i = 0; i < petImagesInput.length; i++) {
        petImages.push(petImagesInput[i].value);
    }

    let petInfo = {
        Name: petName,
        Birthday: petBirthday,
        Gender: petGender,
        Species: petSpecies,
        Color: petColor,
        Breed: petBreed,
        Medical: petMedical,
        Personality: petPersonality,
        Notes: petNotes,
        IMG: petImages
    }
    //console.log(petInfo);
    try {
        await console.log("successful push");
        await axios.post(url, petInfo);
        document.getElementsByClassName('newPetForm')[0].reset();
        document.getElementById('confirmationMessage').textContent = `You have added ${petName} to the adoption list! Click anywhere to return to pets page.`
        document.getElementById('newPetConfirmationBox').style.display = 'flex';
    } catch (err) {
        console.log(err.response.data);
    }
});

const deletePet = async (id) => {
    try {
        await axios.delete(`${url}/${id}`);
        location.reload();
    } catch (error) {
        console.log(error);
    }
    //console.log(id)
};

const showPets = async () => {
    try {
         const { data: {pets},} = await axios.get(url)
         if (pets.length < 1) {
            petCardContainerDOM.innerHTML = '<h5 class="empty-list">There are no pets available at this time...</h5>';
             return;
         }
         const allPets = pets.map((pet) => {
            const {_id: id, Name, Birthday, Gender, Medical, Color, Breed, Species, Personality, Notes, IMG} = pet;
            const bDay = new Date(Birthday)
            return `
            <div class="card">
                <img src='${IMG[0]}' alt='${Name}' />
                <div class="content">
                    <h2>${Name}</h2>
                    <!-- <p>{gender} - {species} - {breed} - {age} months old - available at {location}</p> -->
                    <p>${Name} is a ${Gender.toLowerCase()} ${Color.toLowerCase()} ${Breed.toLowerCase()}. ${Gender == 'Male' ? 'He' : 'She'} was born on ${bDay.toISOString().slice(0, 10)}.</p>
                    <div class="btnContainer">
                        <a href="/adminPet?id=${id}">Edit</a>
                        <a onclick="deletePet('${id}')">Delete</a>
                    </div>
                </div>
            </div>`
        }).reverse().join("")
        petCardContainerDOM.innerHTML = allPets;
    } catch (error) {
        console.error(error)
    }
}
showPets()
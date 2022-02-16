const petCardContainerDOM = document.querySelector('.card-container');
const newPetFormDOM = document.querySelector('.newPetForm');
const url = "/api/v1/pets";

let imgAmount = 3;
const addImg = () => {
    if(imgAmount < 12) {
        document.getElementById('images').innerHTML += '<input type="file" class="petImg" accept="image/*" required><br>';
        imgAmount++;
    } else {
        document.getElementById('addImgBtn').style.display = 'none';
    }
}

newPetFormDOM.addEventListener('submit', (e) => {
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
        petName,
        petBirthday,
        petGender,
        petSpecies,
        petColor,
        petBreed,
        petMedical,
        petPersonality,
        petNotes,
        petImages
    }
    console.log(petInfo);
});

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
                        <a href="/pet?id=${id}">Edit</a>
                        <a href="/pet?id=${id}">Delete</a>
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
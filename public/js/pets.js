const petCardContainerDOM = document.querySelector('.card-container');

const url = "/api/v1/pets";

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
                        <a href="/pet?id=${id}">ADOPT ME</a>
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
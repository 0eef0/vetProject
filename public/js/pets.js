const petCardContainerDOM = document.querySelector('.card-container');

const filterAllBtn = document.querySelector('#all');
const filterCatsBtn = document.querySelector('#cats');
const filterDogsBtn = document.querySelector('#dogs');

const sortByBtn = document.querySelector('.sort-by-container')
const sortByElem = document.querySelector('.sort-by-value')

const filters = ['Age', 'Date Added', 'A-Z', 'Z-A']

var filterPetSelection = 'all';

const url = "/api/v1/pets";


const showPets = async () => {
    try {
        const { data: { pets }, } = await axios.get(url);
        if (pets.length < 1) {
            petCardContainerDOM.innerHTML = '<h5 class="empty-list">There are no pets available at this time...</h5>';
            return;
        }
        const allPets = pets.map((pet) => {
            const { _id: id, Name, Birthday, Gender, Medical, Color, Breed, Species, Personality, Notes, IMG } = pet;
            const bDay = new Date(Birthday)
            return `
            <div class="card">
                <img src='${IMG[0]}' alt='${Name}' />
                <div class="content">
                    <h2>${Name}</h2>
                    <!-- <p>{gender} - {species} - {breed} - {age} months old - available at {location}</p> -->
                    <p>${Name} is a ${Gender.toLowerCase()} ${Color.toLowerCase()} ${Breed.toLowerCase()}. ${Gender == 'Male' ? 'He' : 'She'} was born on ${bDay.toISOString().slice(0, 10)}.</p>
                    <div class="btnContainer">
                        <a href="/pet?id=${id}">More Info</a>
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


filterAllBtn.addEventListener('click', () => {
    filterAllBtn.classList.add('active');
    filterCatsBtn.classList.remove('active');
    filterDogsBtn.classList.remove('active');

    filterPetSelection = 'all';
})
filterCatsBtn.addEventListener('click', () => {
    filterAllBtn.classList.remove('active');
    filterCatsBtn.classList.add('active');
    filterDogsBtn.classList.remove('active');

    filterPetSelection = 'cats';
})
filterDogsBtn.addEventListener('click', () => {
    filterAllBtn.classList.remove('active');
    filterCatsBtn.classList.remove('active');
    filterDogsBtn.classList.add('active');

    filterPetSelection = 'dogs';
})

sortByElem.innerHTML = filters[0];
sortByBtn.addEventListener('click', () => {
    nextFilter = filters[filters.indexOf(sortByElem.innerHTML) + 1];
    if (!nextFilter) nextFilter = filters[0]
    sortByElem.innerHTML = nextFilter;
})
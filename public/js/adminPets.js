const petCardContainerDOM = document.querySelector('.card-container');
const newPetFormDOM = document.querySelector('.newPetForm');
const url = "/api/v1/pets";

const filterAllBtn = document.querySelector('#all');
const filterCatsBtn = document.querySelector('#cats');
const filterDogsBtn = document.querySelector('#dogs');

const sortByBtn = document.querySelector('.sort-by-container')
const sortByElem = document.querySelector('.sort-by-value')

const filters = ['A-Z', 'Z-A', 'Age'];
let currentFilterIndex = 0;

var filterPetSelection = '';

let imgAmount = 3;
const addImg = () => {
    if (imgAmount < 12) {
        document.getElementById('images').innerHTML += '<input type="file" class="petImg" name="img" accept="image/*">';
        imgAmount++;
    } else {
        document.getElementById('addImgBtn').style.display = 'none';
    }
}

const deletePet = async (id) => {
    try {
        await axios.post(`/api/v1/petDelete/${id}`);
    } catch (error) {
        console.log(error);
    }
}

const confirmDeletePet = async (id) => {
    let petDeletion = new Modal({
        title: 'Warning!',
        content: 'Are you sure you want to delete this pet?',
        forms: [
            {
                title: 'Yes',
                type: 'primary',
                action: `/api/v1/petDelete/${id}`,
                method: 'post'
            }, {
                title: 'Cancel',
                type: 'red',
                action() {
                    petDeletion.close()
                }
            }
        ]
    })

    petDeletion.show()
};

const showPets = async () => {
    try {
        const { data: { pets }, } = await axios.get(url);
        if (pets.length < 1) {
            petCardContainerDOM.innerHTML = '<h5 class="empty-list">There are no pets available at this time...</h5>';
            return;
        }
        const allPets = await Promise.all(pets.filter((pet) => filterPetSelection ? (pet.Species == filterPetSelection) : pet).sort((a, b) => sortPets(a, b)).map(async (pet) => {
            const { _id: id, Name, Birthday, Gender, Medical, Color, Breed, Species, Personality, Notes, IMG } = await pet;
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const bDay = new Date(Birthday).toLocaleDateString('PST', options);
            return `
            <div class="card">
                <img src='/api/v1/petImages/${IMG[0]}' alt='${Name}' />
                <div class="content">
                    <h2>${Name}</h2>
                    <!-- <p>{gender} - {species} - {breed} - {age} months old - available at {location}</p> -->
                    <p>${Name} is a ${Gender.toLowerCase()} ${Color.toLowerCase()} ${Breed.toLowerCase()}. ${Gender.split(' ')[1] == 'Male' ? 'He' : 'She'} was born on ${bDay}.</p>
                    <div class="btnContainer">
                        <a href="/adminPet?id=${id}">Edit</a>
                        <a onclick="confirmDeletePet('${id}')" tabindex="0" role=link>Delete</a>
                    </div>
                </div>
            </div>`
        }))
        petCardContainerDOM.innerHTML = allPets.reverse().join("");
    } catch (error) {
        console.error(error)
    }
}
showPets()

const sortPets = (a, b) => {
    if (currentFilterIndex == 0) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) { return -1; }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) { return 1; }
        return 0;
    } else if (currentFilterIndex == 1) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) { return 1; }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) { return -1; }
        return 0;
    } else {
        const date1 = new Date(a.Birthday);
        const date2 = new Date(b.Birthday);
        return date1 - date2
    }
}

filterAllBtn.addEventListener('click', () => {
    filterAllBtn.classList.add('active');
    filterCatsBtn.classList.remove('active');
    filterDogsBtn.classList.remove('active');

    filterPetSelection = '';
    showPets();
})
filterCatsBtn.addEventListener('click', () => {
    filterAllBtn.classList.remove('active');
    filterCatsBtn.classList.add('active');
    filterDogsBtn.classList.remove('active');

    filterPetSelection = 'Cat';
    showPets();
})
filterDogsBtn.addEventListener('click', () => {
    filterAllBtn.classList.remove('active');
    filterCatsBtn.classList.remove('active');
    filterDogsBtn.classList.add('active');

    filterPetSelection = 'Dog';
    showPets();
})

sortByElem.innerHTML = filters[currentFilterIndex];
sortByBtn.addEventListener('click', () => {

    currentFilterIndex < filters.length - 1 ? currentFilterIndex += 1 : currentFilterIndex = 0;

    sortByElem.innerHTML = filters[currentFilterIndex];

    showPets();
})


var coll = document.getElementById("collapse");
var i;

coll.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if(content.style.display === 'block') {
        content.style.display = "none";
    } else {
        content.style.display ="block";
    }
    const icon = document.getElementById('collapsible').children[0];
    if(icon.classList.contains("fa-plus")){
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }else{
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    }
})
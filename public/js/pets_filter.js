const filterAllBtn = document.querySelector('#all');
const filterCatsBtn = document.querySelector('#cats');
const filterDogsBtn = document.querySelector('#dogs');

const sortByBtn = document.querySelector('.sort-by-container')
const sortByElem = document.querySelector('.sort-by-value')

const filters = ['Age', 'Date Added', 'A-Z', 'Z-A']

var filterPetSelection = 'all';

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
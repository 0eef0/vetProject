const menuButtonDOM = document.querySelector('.menu-button');
const linksDivDOM = document.querySelector('.links');
const barsDOM = document.querySelector('.fa-bars')

menuButtonDOM.addEventListener('click', () => {
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
})
let currIndex = 0;
const carouselChange = (index) => {
    // code below changes which button is darker on the carousel button panel
    const btns = document.getElementsByClassName('carouselBtn');//.slice(1, document.getElementsByClassName('carouselBtn').length);
    for(let i = 0; i < btns.length; i++){
        btns[i].classList.remove('activeBtn');
    }
    btns[index].classList.add('activeBtn');

    // code below changes which picture shows on the carousel
    const images = document.getElementsByClassName('carouselImg');//.slice(1, document.getElementsByClassName('carouselImg').length);
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove('activeImg');
    }
    images[index].classList.add('activeImg');

    currIndex = index;
}
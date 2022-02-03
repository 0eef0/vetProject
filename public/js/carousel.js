let currIndex = 0;

let pressed = false;

const btns = document.getElementsByClassName('carouselBtn');
const images = document.getElementsByClassName('carouselImg');

const carouselChange = (index) => {
    pressed = true;
    // code below changes which button is darker on the carousel button panel
    for(let i = 0; i < btns.length; i++){
        btns[i].classList.remove('activeBtn');
    }
    btns[index].classList.add('activeBtn');

    // code below changes which picture shows on the carousel
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove('activeImg');
    }
    images[index].classList.add('activeImg');

    currIndex = index;
};

const nextImg = () => {
    pressed = true;
    if(currIndex < images.length - 1) {
        for(let i = 0; i < btns.length; i++){
            btns[i].classList.remove('activeBtn');
        }
        btns[currIndex + 1].classList.add('activeBtn');

        // code below changes which picture shows on the carousel
        for(let i = 0; i < images.length; i++){
            images[i].classList.remove('activeImg');
        }
        images[currIndex + 1].classList.add('activeImg');

        currIndex++;
    } else {
        for(let i = 0; i < btns.length; i++){
            btns[i].classList.remove('activeBtn');
        }
        btns[0].classList.add('activeBtn');

        // code below changes which picture shows on the carousel
        for(let i = 0; i < images.length; i++){
            images[i].classList.remove('activeImg');
        }
        images[0].classList.add('activeImg');

        currIndex = 0;
    }
};

const prevImg = () => {
    pressed = true;
    if(currIndex > 0) {
        for(let i = 0; i < btns.length; i++){
            btns[i].classList.remove('activeBtn');
        }
        btns[currIndex - 1].classList.add('activeBtn');

        // code below changes which picture shows on the carousel
        for(let i = 0; i < images.length; i++){
            images[i].classList.remove('activeImg');
        }
        images[currIndex - 1].classList.add('activeImg');

        currIndex--;
    } else {
        for(let i = 0; i < btns.length; i++){
            btns[i].classList.remove('activeBtn');
        }
        btns[btns.length-1].classList.add('activeBtn');

        // code below changes which picture shows on the carousel
        for(let i = 0; i < images.length; i++){
            images[i].classList.remove('activeImg');
        }
        images[btns.length-1].classList.add('activeImg');

        currIndex = btns.length-1;
    }
};

setInterval(() => {
    (!pressed) ? nextImg() : pressed = false;
}, 3000);
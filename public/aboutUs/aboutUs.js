const aboutUs = document.querySelector('#aboutUs');

var cont1 = 'dsf';
var cont2 = 'vxc';

async function getInfoAboutUs(){
    try {
        const { data: aboutUs, } = await axios.get(``);
        aboutUs.innerHTML = `
            <div id="infoAboutUs">
                <p>${data.main.info1}</p>
                <img src=${data.main.img}/>
                <p>${data.main.info2}</p>
            </div>
            <div class="row">${()=>{
                data.
            }}</div>
            `;
    }
    catch(error) {
        console.log(error)
    }
}
const main = document.querySelector('#aboutUs main');

async function getInfoAboutUs() {
    try {
        // const { data: aboutUs, } = await axios.get(``);
        main.innerHTML = `
            
                `;
    }
    catch (error) {
        console.log(error)
    }
}
getInfoAboutUs()
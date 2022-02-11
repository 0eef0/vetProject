const main = document.querySelector('#aboutUs main');

/*
    DONT YOU DARE MOVE THE CONTENT TO THE HTML PAGE YOU RUBES
*/

async function getInfoAboutUs() {
    try {
        // const { data: aboutUs, } = await axios.get(``);
        main.innerHTML = `
            <div id="infoAboutUs">
            <h1>About Us</h1>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt?
                </p>
                <img src="./assets/placeholder.jpg">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt?
                </p>
            </div>
            </div>
            <hr/>
            <h1 class='supText'>Our Teachers/Team</h1>
            <div class="rows">
                <div>
                    <h1>Whakdfk</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                    tempora, accusamus vitae ex laboriosam! Minima, mollitia.
                </div>
                <div>
                    <h1>Whakdfk</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                    tempora, accusamus vitae ex laboriosam! Minima, mollitia.
                </div>
                <div>
                    <h1>Whakdfk</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                    tempora, accusamus vitae ex laboriosam! Minima, mollitia.
                </div>
                <div>
                    <h1>Whakdfk</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                    tempora, accusamus vitae ex laboriosam! Minima, mollitia.
                </div>
                <div>
                    <h1>Whakdfk</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                    mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                    ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                    tempora, accusamus vitae ex laboriosam! Minima, mollitia.
                </div>
            </div>
        `;
    }
    catch (error) {
        console.log(error)
    }
}
getInfoAboutUs()
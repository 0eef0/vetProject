const main = document.querySelector('#aboutUs main');

async function getInfoAboutUs() {
    try {
        // const { data: aboutUs, } = await axios.get(``);
        main.innerHTML = `
            <h1 class='supText'>About Us</h1>
            <div id="infoAboutUs">
                <p>${'data.main.info1'}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                tempora, accusamus vitae ex laboriosam! Minima, mollitia.30%</p>
                <img src=${'data.main.img'}/>
                <p>${'data.main.info2'}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quos soluta, accusamus culpa, sunt sit
                mollitia laborum, atque aut recusandae assumenda perferendis nisi odio itaque impedit odit perspiciatis
                ipsa hic libero quis incidunt? Beatae earum quaerat dignissimos totam accusantium, quis iure at sequi
                tempora, accusamus vitae ex laboriosam! Minima, mollitia.</p>
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
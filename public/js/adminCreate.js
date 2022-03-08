const newUserFormDOM = document.querySelector('.newUserForm');
const currUsersDOM = document.querySelector('#currUsers');

newUserFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const user = {
        name,email,pass
    }
    addUser(user);
    newUserFormDOM.reset();
});

const addUser = (user) => {
    currUsersDOM.innerHTML += `<div class="user" user="${user.email}">
                    <p class="name">${user.name}</p>
                    <p class="email">${user.email}</p>
                    <p class="password">${user.pass}</p>
                    <p class="btnPanel">
                        <button onclick="deleteUser('${user.email}')">Delete ${user.name}</button>
                    </p>
                </div>`;
};

const deleteUser = (email) => {
    for(let i = 0; i < currUsersDOM.children.length; i++) {
        if (email === currUsersDOM.children[i].attributes.user.nodeValue) {
            currUsersDOM.children[i].remove()
            break;
        }
    }
};
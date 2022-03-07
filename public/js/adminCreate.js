const newUserFormDOM = document.querySelector('.newUserForm');
const currUsersDOM = document.querySelector('#currUsers tbody');

newUserFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const user = {
        name,username,email,pass
    }
    addUser(user);
    newUserFormDOM.reset();
});

const addUser = (user) => {
    currUsersDOM.innerHTML += `<tr user="${user.email}">
                    <td class="userInfo">${user.name}</td>
                    <td class="userInfo">${user.username}</td>
                    <td class="userInfo">${user.email}</td>
                    <td class="password userInfo">${user.pass}</td>
                    <td class="btnPanel">
                        <button onclick="deleteUser('${user.email}')">Delete User</button>
                    </td>
                </tr>`;
};

const deleteUser = (email) => {
    for(let i = 0; i < currUsersDOM.children.length; i++) {
        if (email === currUsersDOM.children[i].attributes.user.nodeValue) {
            currUsersDOM.children[i].remove()
            break;
        }
    }
};
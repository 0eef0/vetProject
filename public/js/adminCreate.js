const newUserFormDOM = document.querySelector('.newUserForm');

newUserFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    console.log({
        name,username,email,pass
    })
})
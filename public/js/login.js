const loginFormDOM = document.getElementById('login');

loginFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPass').value;

    console.log("You pressed the login button", username, password);
    try {
        await axios.get('/login')
        await console.log("Axios retrieved successfully");
    } catch(error) {
        console.log(error.response.data);
    }
});

// const usernameInputDOM = document.querySelector('#login-user');
// const passwordInputDOM = document.querySelector('#login-pass');

// loginFormDOM.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const username = usernameInputDOM.value;
//     const password = passwordInputDOM.value;

//     try {
//         let api = axios.get('/login');
//         console.log(api);
//     } catch (error) {
//         // formAlertDOM.style.display = 'block';
//         // formAlertDOM.innerHTML = `An error occurred, please try again.`;
//         console.log("Error");
//     }
// })
// const loginFunc = require('../../component/loginScript');
// const time = 'now'
// console.log('test');
// loginFunc();

// module.exports = time
//const login = loginFunc;

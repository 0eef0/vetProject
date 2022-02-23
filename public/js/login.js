const loginFormDOM = document.getElementById('login');

loginFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPass').value;

    console.log("You pressed the login button", username, password);
    try {
        let loginInfo = await axios.get('/login');
        loginInfo = await loginInfo.data.Login;
        await console.log(loginInfo);
        await console.log("Axios retrieved successfully");
    } catch(error) {
        console.log(error.response.data);
    }
});
// const loginFormDOM = document.getElementById('login');

// // const test = async () => {
// //     let { encrypted } = await axios.get('https://pw-encrypt-decrypt.herokuapp.com/encrypt?key=3b7c0803-d60a-4968-b317-21fda9615070&password=hello', {
// //         headers: {
// //             'Access-Control-Allow-Origin': '*',
// //             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE'
// //         }
// //     });
// //     // return encrypted;
// //     console.log(encrypted);
// // }
// // test();

// loginFormDOM.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const username = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPass').value;

//     console.log(`You pressed the login button\nUsername: "${username}"\nPassword: "${password}"`);
//     try {
//         let loginInfo = await axios.get('/login');
//         loginInfo = await loginInfo.data.Login;
//         // await console.log(loginInfo);
//         await console.log("Axios retrieved successfully");
//     } catch (error) {
//         console.log(error.response.data);
//     }
// });
const usernameText = document.querySelector('#loginUsername');
const passwordText = document.querySelector('#loginPass');
const loginForm = document.querySelector('#login');
const errorMessageDOM = document.querySelector('.form-error');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('login')

  try {
    const user = {
      username: usernameText.value,
      password: passwordText.value
    }
    await axios.post('/users/login', user)
  } catch (err) {
    console.error(err)
  }
})
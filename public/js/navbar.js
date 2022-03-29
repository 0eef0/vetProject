const menuButtonDOM = document.querySelector('.menu-button');
const linksDivDOM = document.querySelector('.links');
const barsDOM = document.querySelector('.fa-bars')
const logoutBtn = document.querySelector('#logoutBtn')

const usernameDOM = document.querySelector('.username');
const userInfoDOM = document.querySelector('.user-info');

const userCreateBtnDOM = document.querySelector('.userCreate')

menuButtonDOM.addEventListener('click', () => {
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
})

logoutBtn && logoutBtn.addEventListener('click', async () => {
    console.log('logout')
    await axios.post('/users/logout');
})

const getCurrentUser = async () => {
    const {data: {user}} = await axios.get('/users/current')
    if (user) {
        const {name, status} = user;
        console.log(status)
        usernameDOM.innerHTML = name;
        console.log(status == "Master")
        if (status == 'Master') {
            userCreateBtnDOM.style.visibility = 'visible';
            userCreateBtnDOM.style.display = 'block';
        }
    } else {
        console.log('not logged in')
    }
}
getCurrentUser()
const menuButtonDOM = document.querySelector('.menu-button');
const linksDivDOM = document.querySelector('.links');
const barsDOM = document.querySelector('.fa-bars')
const logoutBtn = document.querySelector('#logoutBtn')

menuButtonDOM.addEventListener('click', () => {
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
})

logoutBtn && logoutBtn.addEventListener('click', async () => {
    console.log('logout')
    await axios.post('/users/logout');
})

const getCurrentUser = async () => {
    const { data: { user }, } = await axios.get('/users/current')

    console.log(user)
}
getCurrentUser();
const newUserFormDOM = document.querySelector('.newUserForm');
const currUsersDOM = document.querySelector('#currUsers');

let userArr = [];
const getUsers = async () => {
  const { data: { allUsers } } = await axios.get('/users/getAdmins');
  //userArr = Login
  for (user of allUsers) {
    populateUsers(user);
  }
}
getUsers();

newUserFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = {
    username,
    name,
    password
  }
  addNewUser(user);
  newUserFormDOM.reset();
});

const populateUsers = (user) => {
  currUsersDOM.innerHTML += `<div class="user" user="${user.username}">
                  <p class="name">${user.name}</p>
                  <p class="email">${user.username}</p>
                  <button onclick="deleteUser('${user._id}')">Delete ${user.name}</button>
                </div>`;
};

const addNewUser = async (user) => {
  await axios.post(`/users`, user);
  await location.reload();
}

const deleteUser = async (id) => {
  await axios.delete(`/api/v1/login/${id}`);
  await location.reload();
};
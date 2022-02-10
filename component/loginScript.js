const { encrypt, decrypt } = require('./crypt');
const hash = encrypt('Hello World!');
console.log(hash);

const loginFunc = (user, pass) => {
    console.log("It worked");
    console.log(user, pass);
}


// {
//     iv: '237f306841bd23a418878792252ff6c8',
//     content: 'e2da5c6073dd978991d8c7cd'
// }

// const text = decrypt(hash);
// console.log(text); // Hello World!

module.exports = loginFunc;
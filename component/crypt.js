const bcrypt = require('bcrypt');

/** One way, can't decrypt but can compare */
const salt = bcrypt.genSaltSync(10);

/** Encrypt password */
bcrypt.hash('4d0p7_411_p375', salt, (err, res) => {
    console.log('hash', res);
    hash = res;
    compare(hash);
});

/** Compare stored password with new encrypted password */
function compare(encrypted) {
    bcrypt.compare('4d0p7_411_p375', encrypted, (err, res) => {
        // res == true or res == false
        console.log('Compared result', res, hash)
    })
}

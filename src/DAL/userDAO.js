const User = require('../user')

let addUser = () => {
    // let user = new User(
    //     username: 'bier',
    //     password: 'catchphrase'
    // )
    db.user.insertOne({
        username: 'bier',
        password: 'catchphrase'
    })
}

module.exports = addUser();
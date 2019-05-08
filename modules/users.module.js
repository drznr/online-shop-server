const User = require('../models/user.model');

const usersModule = {
    searchUser: (username, pass) => {
        return User.findOne({ Username: username, Password: pass });
    },
    save: (user) => {
        let newUser = new User(user);
        return newUser.save();
    },
    searchUserByID: (id) => {
        return User.findOne({ ID: id });
    }
}

module.exports = usersModule;
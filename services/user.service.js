const User = require ("../model/user")

const findUser = async (email) => {
    const existed = await User.findOne({ email: email});
    return existed;
}

const createUser = async (newUser) => {
    const user = await User.create(newUser);
    return user;
}

module.exports = {
    findUser,
    createUser
}


const User = require('../../models/user.model');
const {hashPassword} = require('../../ults/password.ult');

const users = [
    {username: 'john_doe', email: 'john@example.com', password: '123456'},
    {username: 'jane_doe', email: 'jane@example.com', password: '123456'},
];

users.forEach(user => {
    const {salt, hash} = hashPassword(user.password);
    user.salt = salt;
    user.hash = hash;
});

const seedUsers = async () => {
    await User.deleteMany({});
    return await User.insertMany(users);
};

module.exports = seedUsers;

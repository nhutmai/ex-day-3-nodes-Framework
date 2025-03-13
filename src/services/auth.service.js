const User = require('../models/user.model');
const userService = require('../services/user.service');
const {hashPassword, verifyPassword} = require('../ults/password.ult');
const {encodeToken} = require('../ults/token.utl');
const login = async (username, password) => {
    try {
        const user = await userService.findUserByUsername(username);
        if (!user) {
            throw new Error('user not found');
        }
        if (!verifyPassword(password, user.salt, user.hash)) {
            throw new Error('Invalid password');
        }
        const token = await encodeToken(user);
        return {
            message: 'success',
            token,
            user
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

const register = async (username, email, password) => {
    try {

        const user = await User.findOne({username});
        if (user) {
            throw new Error('username already exists');
        } else {
            const {salt, hash} = hashPassword(password);
            return await User.create({username, email, salt, hash});
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    login,
    register,
};
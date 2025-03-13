const User = require('../models/user.model');

const getAllUsers = async () => {
    try {
        return await User.find({});

    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (userId) => {
    try {
        return await User.findById(userId);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateUser = async (id, user) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user);
        return await User.findById(updatedUser._id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const createUser = async (user) => {
    try {
        return await User.create(user);
    } catch (error) {
        throw new Error(error.message);
    }
};

const findCommentAuthor = async (id) => {
    try {
        return await User.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const findUserByUsername = async (username) => {
    try {
        return await User.findOne({username}) ?? null;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    createUser,
    findCommentAuthor,
    findUserByUsername,
};
const userService = require('../services/user.service');
const commentService = require('../services/comment.service');
const getAllUsers = async () => {
    await userService.getAllUsers();
};

const getUserById = async ({id}) => {
    await userService.getUserById(id);
};

const createUser = async ({user}) => {
    await userService.createUser(user);
};

const updateUser = async ({id, user}) => {
    await userService.updateUser(id, user);
};

const findCommentsByUserId = async (userId) => {
    await commentService.findCommentsByUserId(userId);
};

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    findCommentsByUserId,
};
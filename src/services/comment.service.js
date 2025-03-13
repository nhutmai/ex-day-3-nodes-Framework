const Comment = require('../models/comment.model');

const getCommentById = async (id) => {
    try {
        return await Comment.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllComments = async () => {
    try {
        return await Comment.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

const createComment = async (comment) => {
    try {
        return await Comment.create(comment);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateComment = async (id, comment) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, comment);
        return await Comment.findById(updatedComment._id);
    } catch (error) {
        throw new Error(error.message);
    }
};

const findCommentsByEventId = async (eventId) => {
    try {
        return await Comment.find({event: eventId});
    } catch (error) {
        throw new Error(error.message);
    }
};

const findCommentsByUserId = async (userId) => {
    try {
        return await Comment.find({user: userId});
    } catch (error) {
        throw new Error(error.message);
    }
};
module.exports = {
    findCommentsByEventId,
    getCommentById,
    getAllComments,
    createComment,
    updateComment,
    findCommentsByUserId,
};
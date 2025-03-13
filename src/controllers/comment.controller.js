const commentService = require('../services/comment.service');
const eventService = require('../services/event.service');
const userService = require('../services/user.service');
const getAllComments = async () => {
    return await commentService.getAllComments();
};
const getCommentById = async ({id}) => {
    return await commentService.getCommentById(id);
};
const createComment = async ({comment}) => {
    return await commentService.createComment(comment);
};
const updateComment = async ({id, comment}) => {
    return await commentService.updateComment(id, comment);
};
const findEventByCommentId = async (commentId) => {
    return await eventService.findEventByCommentId(commentId);
};
const findCommentAuthor = async (userId) => {
    return await userService.findCommentAuthor(userId);
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    findEventByCommentId,
    findCommentAuthor
};
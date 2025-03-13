const {isAuthenticated} = require('../../middleware/auth');
const eventController = require('../../controllers/comment.controller');
module.exports = {
    Query: {
        getAllComments: (_, args, context) => {
            isAuthenticated(context);
            return eventController.getAllComments(args);
        },
        getCommentById: (_, args, context) => {
            isAuthenticated(context);
            return eventController.getCommentById(args);
        },
    },
    Mutation: {
        createComment: (_, args, context) => {
            isAuthenticated(context);
            return eventController.createComment(args.comment);
        },
        updateComment: (_, args, context) => {
            isAuthenticated(context);
            return eventController.updateComment(args.comment);
        }
    },
    Comment: {
        event(parent) {
            return eventController.findEventByCommentId(parent.id);
        },
        user(parent) {
            return eventController.findCommentAuthor(parent.user);
        }
    },
};
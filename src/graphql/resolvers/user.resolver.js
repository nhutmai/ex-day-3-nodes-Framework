const {isAuthenticated} = require('../../middleware/auth');
const userController = require('../../controllers/user.controller');
const authController = require('../../controllers/authenticate.controller');
module.exports = {
    Query: {
        getAllUsers: (_, args, context) => {
            isAuthenticated(context);
            return userController.getAllUsers(args);
        },
        getUserById: (_, args, context) => {
            isAuthenticated(context);
            return userController.getUserById(args);
        }
    },
    Mutation: {
        createUser: (_, args, context) => {
            isAuthenticated(context);
            return userController.createUser(args.user);
        },
        updateUser: (_, args, context) => {
            isAuthenticated(context);
            return userController.updateUser(args.user);
        },
        login: (_, args) => {
            return authController.login(args.user);
        },
        register: (_, args) => {
            return authController.register(args.user);
        }
    },
    User: {
        comments(parent) {
            return userController.findCommentsByUserId(parent.id);
        }
    }
};
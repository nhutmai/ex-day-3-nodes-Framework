const {isAuthenticated} = require('../../middleware/auth');
const categoryController = require('../../controllers/category.controller');

module.exports = {
    Query: {
        getCategoryById(_, args, context) {
            isAuthenticated(context);
            return categoryController.getCategoryById(args);
        },
        getAllCategories(_, args, context) {
            isAuthenticated(context);
            return categoryController.getAllCategories(args);
        },
    },
    Mutation: {
        createCategory(_, args, context) {
            isAuthenticated(context);
            return categoryController.createCategory(args);
        },
        updateCategory(_, args, context) {
            isAuthenticated(context);
            return categoryController.updateCategory(args);
        }
    },
    Category: {
        events(parent) {
            return categoryController.findEventsByCategoryId(parent.id);
        }
    },
};
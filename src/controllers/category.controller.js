const categoryService = require('../services/category.service');
const eventService = require('../services/event.service');
const {getCategoriesByIds} = require('./event.controller');

const getAllCategories = async () => {
    return await categoryService.getAllCategories();
};
const getCategoryById = async ({id}) => {
    return await categoryService.getCategoryById(id);
};
const createCategory = async ({category}) => {
    return await categoryService.createCategory(category);
};
const updateCategory = async ({id, category}) => {
    return await categoryService.updateCategory(id, category);
};
const findEventsByCategoryId = async (categoryId) => {
    return await eventService.findEventsByCategoryId(categoryId);
};

module.exports = {
    getAllCategories,
    getCategoriesByIds,
    getCategoryById,
    createCategory,
    updateCategory,
    findEventsByCategoryId,
};
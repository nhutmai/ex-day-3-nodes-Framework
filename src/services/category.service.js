const Category = require('../models/category.model');
const err = require('jsonwebtoken/lib/JsonWebTokenError');
const getCategoryById = async (id) => {
    try {
        return Category.findById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};
const getAllCategories = async () => {
    try {
        return await Category.find({});
    } catch (error) {
        throw new Error(error.message);
    }
};
const getCategoriesByIds = async (categoryIds) => {
    try {
        return Category.find({_id: {$in: categoryIds}});
    } catch (error) {
        console.error(error.message);
    }
};
const createCategory = async (category) => {
    try {
        return await Category.create(category);
    } catch (error) {
        throw new Error(err.message);
    }
};

const updateCategory = async (id, category) => {
    try {
        const updatedCategory = Category.findByIdAndUpdate(id, category);
        return await Category.findById(updatedCategory._id);
    } catch (error) {
        throw new Error(err.message);
    }
};

module.exports = {
    getCategoriesByIds,
    getCategoryById,
    getAllCategories,
    createCategory,
    updateCategory,
};
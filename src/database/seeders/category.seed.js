const Category = require('../../models/category.model');

const categories = [
    {name: 'Music'},
    {name: 'Sports'},
    {name: 'Technology'},
    {name: 'Art'}
];

const seedCategories = async () => {
    await Category.deleteMany({});
    return await Category.insertMany(categories);
};

module.exports = seedCategories;

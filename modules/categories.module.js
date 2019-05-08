const Category = require('../models/category.model');

const categoriesModule = {
  save: (catg) => {
    let newCategoriy = new Category(catg);
    return newCategoriy.save();
  },
  get: (name) => {
    if (name) return Category.findOne({ title: name });
    else return Category.find();
  }
}

module.exports = categoriesModule;
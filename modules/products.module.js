const Product = require('../models/product.model');

const productsModule = {
  save: (prod) => {
    let newProduct = new Product(prod);
    return newProduct.save();
  },
  getAll: (catg) => {
    if (catg) {
      return Product.find({ categoryID: catg });
    }
    return Product.find();
  },
  updateProduct: (prodId, updatedProd) => {
    return Product.findOneAndUpdate({ _id: prodId }, updatedProd);
  }
}

module.exports = productsModule;
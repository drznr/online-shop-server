var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: String,
    categoryID: String,
    price: Number,
    image: String
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
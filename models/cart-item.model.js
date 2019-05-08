var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartItemSchema = new Schema({
    productID: String,
    cartID: String,
    quantity: Number,
    finalPrice: Number,
    name: String,
    image: String
});

var CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = CartItem;
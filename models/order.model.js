var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    clientID: String,
    cartID: String,
    finalPrice: Number,
    city: String,
    street: String,
    orderDate: String,
    supplyDate: String,
    creditCardDigits: Number
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    clientID: String,
    creationDate: String
});

var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
const Cart = require('../models/cart.model');


const cartsModule = {
  create: (clientID) => {
      let newCart = new Cart({
        clientID: clientID,
        creationDate: new Date()
      });
     return newCart.save();
  },
  find: (clientID) => {
      return Cart.findOne({clientID: clientID});
  }
} 


module.exports = cartsModule;
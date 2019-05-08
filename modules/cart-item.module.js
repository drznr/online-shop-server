const CartItem = require('../models/cart-item.model');

const cartItemModule = {
    save: (item) => {
        let newCartItem = new CartItem(item);
        return newCartItem.save();
    },
    findCartItems: (cartId) => {
        return CartItem.find({ cartID: cartId });
    },
    deleteCartItem: (itemId) => {
        return CartItem.findOneAndDelete({ _id: itemId });
    },
    deleteAllCartItems: (cartId) => {
        return CartItem.remove({ cartID: cartId });
    }
}

module.exports = cartItemModule;
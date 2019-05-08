const Order = require('../models/order.model');

const ordersModule = {
    get: (date) => {
        if (date) return Order.find({ supplyDate: date });
        else return Order.find();
    },
    save: (ord) => {
        let newOrder = new Order(ord);
        return newOrder.save();
    },
    getUsers: (userId) => {
        return Order.find({clientID: userId});
    }
}

module.exports = ordersModule;
const express = require('express');
const router = express.Router();
const categoriesModule = require('../modules/categories.module');
const productsModule = require('../modules/products.module');
const cartsModule = require('../modules/carts.module');
const cartItemsModule = require('../modules/cart-item.module');
const ordersModule = require('../modules/orders.module');
const receiptModule = require('../modules/receipt.module');


router.post('/categories', async (req, res, next) => {
  try {
    let category = {
      title: req.body.title,
      status: ""
    }
    res.json(await categoriesModule.save(category));
  } catch (err) {
    res.json(err);
  }
});
router.get('/categories', async (req, res, next) => {
  try {
    res.json(await categoriesModule.get());
  } catch (err) {
    res.json(err);
  }
});
router.get('/categories/:name', async (req, res, next) => {
  try {
    res.json(await categoriesModule.get(req.params.name));
  } catch (err) {
    res.json(err);
  }
});
router.post('/products', async (req, res, next) => {
  try {
    res.json(await productsModule.save(req.body));
  } catch (err) {
    res.json(err);
  }
});
router.put('/products/:id', async (req, res, next) => {
  try {
    res.json(await productsModule.updateProduct(req.params.id, req.body));
  } catch (err) {
    res.json(err);
  }
});
router.get('/products', async (req, res, next) => {
  try {
    res.json(await productsModule.getAll());
  } catch (err) {
    res.json(err);
  }
});
router.get('/products/:category', async (req, res, next) => {
  try {
    res.json(await productsModule.getAll(req.params.category));
  } catch (err) {
    res.json(err);
  }
});
router.get('/search/:name', async (req, res, next) => {
  try {
    let allProds = await productsModule.getAll();
    allProds = allProds.filter(prod => prod.title.includes(req.params.name));
    res.json(allProds);
  } catch (err) {
    res.json(err);
  }
});
router.post('/carts', async (req, res, next) => {
  try {
    if (req.session.user) {
      res.json(await cartsModule.create(req.session.user._id));
    }
  } catch (err) {
    res.json(err);
  }
});
router.get('/carts', async (req, res, next) => {
  try {
    res.json(await cartsModule.find(req.session.user._id));
  } catch (err) {
    res.json(err);
  }
});
router.post('/cartitems', async (req, res, next) => {
  try {
    res.json(await cartItemsModule.save(req.body));
  } catch (err) {
    res.json(err);
  }
});
router.get('/cartitems/:id', async (req, res, next) => {
  try {
    res.json(await cartItemsModule.findCartItems(req.params.id));
  } catch (err) {
    res.json(err);
  }
});
router.delete('/cartitems/:itemID', async (req, res, next) => {
  try {
    res.json(await cartItemsModule.deleteCartItem(req.params.itemID));
  } catch (err) {
    res.json(err);
  }
});
router.delete('/carts/:cartId', async (req, res, next) => {
  try {
    res.json(await cartItemsModule.deleteAllCartItems(req.params.cartId));
  } catch (err) {
    res.json(err);
  }
});
router.get('/orders', async (req, res, next) => {
  try {
    res.json(await ordersModule.get());
  } catch (err) {
    res.json(err);
  }
});
router.get('/orders/:date', async (req, res, next) => {
  try {
    res.json(await ordersModule.get(req.params.date));
  } catch (err) {
    res.json(err);
  }
});
router.get('/orders/user/:id', async (req, res, next) => {
  try {
    res.json(await ordersModule.getUsers(req.params.id));
  } catch (err) {
    res.json(err);
  }
});
router.post('/orders', async (req, res, next) => {
  try {
    let strCreditNum = req.body.form.creditCard.toString();
    strCreditNum = strCreditNum.substring(12, 16);
    strCreditNum = parseInt(strCreditNum);
    let newOrder = {
      clientID: req.session.user._id,
      cartID: req.body.details.cartId,
      finalPrice: req.body.details.finalPrice,
      city: req.body.form.city,
      street: req.body.form.street,
      orderDate: new Date().toString(),
      supplyDate: req.body.form.supplyDate,
      creditCardDigits: strCreditNum
    }
    res.json(await ordersModule.save(newOrder));
  } catch (err) {
    res.json(err);
  }
});

router.post('/orders/receipt', async (req, res, next) => {
  try {
    let data = await receiptModule.saveReceipt(req.body.items);
    res.json({path: data});
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;

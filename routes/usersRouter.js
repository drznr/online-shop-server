const express = require('express');
const router = express.Router();
const usersModule = require('../modules/users.module');
const categoriesModule = require('../modules/categories.module');
const productsModule = require('../modules/products.module');


router.post('/login', async (req, res, next) => {
  try {
    let data = await usersModule.searchUser(req.body.username, req.body.password);
    if (data) {
      if (data.Role === "admin") {
        req.session.user = data;
        res.json({ approve: true, isAdmin: true, user: data });
      } else {
        req.session.user = data;
        res.json({ approve: true, isAdmin: false, user: data });
      }
    } else res.json({ approve: false });
  } catch (err) {
    res.json(err);
  }
});
router.get('/login', async (req, res, next) => {
  try {
    if (req.session.user) {
      if (req.session.user.Role === "admin") res.json({ connected: true, isAdmin: true, user: req.session.user });
      else res.json({ connected: true, user: req.session.user });
    }
    else res.json({ connected: false });
  } catch (err) {
    res.json(err);
  }
});
router.get('/logout', (req, res, next) => {
  try {
    req.session.destroy((err) => {
      res.json({ connected: false });
    });
  } catch (err) {
    res.json({ err: err });
  }
});


router.get('/register/:id', async (req, res, next) => {
  try {
    let data = await usersModule.searchUserByID(req.params.id);
    if (data) res.json({ IdAvailable: false });
    else res.json({ IdAvailable: true });
  } catch (err) {
    res.json(err);
  }
});
router.post('/register', async (req, res, next) => {
  try {
    let user = {
      Fname: req.body.second.Fname,
      Lname: req.body.second.Lname,
      ID: req.body.first.ID,
      Email: req.body.first.Email,
      Username: req.body.first.Username,
      Password: req.body.first.Password,
      City: req.body.second.City,
      Street: req.body.second.Street,
      Role: "client"
    }
    let data = await usersModule.save(user);
    if (data._id) {
      req.session.user = data;
      res.json({ approve: true, isAdmin: false, user: data });
    } else {
      res.json({ approve: false });
    }
  } catch (err) {
    res.json(err);
  }
});



module.exports = router;

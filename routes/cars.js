/*
var express = require('express');
var router = express.Router();


const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
*/
var express = require('express');
const cars_controlers= require('../controllers/cars');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cars', { title: 'Search Results cars class' });
});



//var express = require('express');
//const cars_controlers= require('../controllers/cars');
var router = express.Router();
/* GET costumes */
router.get('/', cars_controlers.cars_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', cars_controlers.cars_view_one_Page);

/* GET create bakery page */
//router.get('/create',secured, cars_controlers.cars_create_Page);
router.get('/create',cars_controlers.cars_create_Page);


/* GET create update page */
//router.get('/update',secured, cars_controlers.cars_update_Page);
router.get('/update',cars_controlers.cars_update_Page);

/* GET create bakery page */
//router.get('/delete',secured, cars_controlers.cars_delete_Page);

router.get('/delete',cars_controlers.cars_delete_Page);


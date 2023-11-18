var express = require('express');
var router = express.Router();

products = [
  {
    "ProductID": 1,
    "ProductName": "Chais",
    "SupplierID": 1,
    "CategoryID": 1,
    "Unit": "10 boxes x 20 bags",
    "Price": 18
  },
  {
    "ProductID": 2,
    "ProductName": "Chang",
    "SupplierID": 1,
    "CategoryID": 1,
    "Unit": "24 - 12 oz bottles",
    "Price": 19
  },
  {
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "SupplierID": 1,
    "CategoryID": 2,
    "Unit": "12 - 550 ml bottles",
    "Price": 10
  },
  {
    "ProductID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "SupplierID": 2,
    "CategoryID": 2,
    "Unit": "48 - 6 oz jars",
    "Price": 22
  },
  {
    "ProductID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "SupplierID": 2,
    "CategoryID": 2,
    "Unit": "36 boxes",
    "Price": 21
  },
  {
    "ProductID": 6,
    "ProductName": "Grandma's Boysenberry Spread",
    "SupplierID": 3,
    "CategoryID": 2,
    "Unit": "12 - 8 oz jars",
    "Price": 25
  },
  {
    "ProductID": 7,
    "ProductName": "Uncle Bob's Organic Dried Pears",
    "SupplierID": 3,
    "CategoryID": 7,
    "Unit": "12 - 1 lb pkgs.",
    "Price": 30
  },
  {
    "ProductID": 8,
    "ProductName": "Northwoods Cranberry Sauce",
    "SupplierID": 3,
    "CategoryID": 2,
    "Unit": "12 - 12 oz jars",
    "Price": 40
  },
  {
    "ProductID": 9,
    "ProductName": "Mishi Kobe Niku",
    "SupplierID": 4,
    "CategoryID": 6,
    "Unit": "18 - 500 g pkgs.",
    "Price": 97
  },
  {
    "ProductID": 10,
    "ProductName": "Ikura",
    "SupplierID": 4,
    "CategoryID": 8,
    "Unit": "12 - 200 ml jars",
    "Price": 31
  }
]

//Rutas y Callbacks 

/* GET products listing. */
router.get('/listing', function(req, res, next) {
  res.status(200).send(products);
});

module.exports = router;

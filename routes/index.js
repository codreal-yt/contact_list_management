// Loading the express module
const express = require('express');
// Using the router functionality
const router = express.Router();
// importing home controller
const homeController = require('../controllers/home_controller');
// import success controller
const successController = require('../controllers/success_controller');

router.get('/', homeController.home);
router.get('/success', successController.successMessage);

module.exports = router;
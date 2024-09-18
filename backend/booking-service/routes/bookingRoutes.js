const express = require('express');
const router = express.Router();
const bookingController  = require('../controllers/bookingController');

// POST request to create a booking
router.post('/booking', bookingController.booking);

module.exports = router;

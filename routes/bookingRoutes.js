const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    getBookings,
    createBooking,
    deleteBooking,
    updateBooking
} = require('../controllers/bookingController');

router.get('/', auth, getBookings);
router.post('/', createBooking);
router.delete('/:id', auth, deleteBooking);
router.put('/:id', auth, updateBooking);

module.exports = router;
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    name: String,

    email: String,

    package: String,

    date: String,

    paymentId: String,

    paymentStatus: {
        type: String,
        default: "Pending"
    },

    amount: Number

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
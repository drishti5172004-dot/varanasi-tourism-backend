const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
    const data = await Booking.find().sort({ _id: -1 });
    res.json(data);
};

exports.createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json({ message: "Saved" });
};

exports.deleteBooking = async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};

exports.updateBooking = async (req, res) => {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};
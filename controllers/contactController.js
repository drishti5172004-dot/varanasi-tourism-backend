const Contact = require('../models/Contact');

exports.getMessages = async (req, res) => {
    const data = await Contact.find().sort({ _id: -1 });
    res.json(data);
};

exports.sendMessage = async (req, res) => {
    const msg = new Contact(req.body);
    await msg.save();
    res.json({ message: "Sent" });
};
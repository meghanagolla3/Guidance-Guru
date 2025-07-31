const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });
  await contact.save();
  res.json({ message: 'Message submitted' });
};

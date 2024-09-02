const Contact = require('../models/contact-model');

// Controller to handle contact form submission
const contact = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body
        const { email, message } = req.body;

        // Create a new contact document
        const newContact = new Contact({ email, message });
        await newContact.save();

        console.log('New Contact:', newContact);

        return res.status(200).json({ message: 'Details submitted successfully' });
    } catch (error) {
        console.error('Error Details:', error); // Log the error details
        return res.status(500).json({ message: 'Details not delivered', error });
    }
};

const home = async (req, res) => {
    try {
        res.status(200).send("home page: using controller");
    } catch (error) {
        console.error('Error in home controller:', error); // Log any errors
        res.status(500).send('Error occurred');
    }
};

module.exports = { contact, home };
